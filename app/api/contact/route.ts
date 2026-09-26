import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";
import { supabase, isSupabaseConfigured } from "@/lib/db/supabase";

// Simple in-memory rate limiting for serverless/local protection
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.expiresAt) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + 60 * 1000 }); // 1 min window
    return true;
  }

  if (record.count >= 5) {
    return false; // Exceeded 5 requests per minute
  }

  record.count += 1;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute before trying again." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // 1. Honeypot check for automated spam bots
    if (body.honeypot && body.honeypot.trim() !== "") {
      // Silently accept bot submission without processing
      return NextResponse.json({ success: true, message: "Message received." });
    }

    // 2. Server-side validation
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const issue = validationResult.error.issues[0]?.message || "Invalid input";
      return NextResponse.json({ error: issue }, { status: 400 });
    }

    const { name, email, subject, message } = validationResult.data;

    // 3. Store message in Supabase if configured
    if (isSupabaseConfigured() && supabase) {
      const { error: dbError } = await supabase.from("contact_messages").insert({
        name,
        email,
        subject,
        message,
      });

      if (dbError) {
        console.error("Failed to store contact message in Supabase:", dbError.message);
      }
    } else {
      // In development / demo mode, securely log receipt
      console.log(`[Contact Form Received] Name: ${name}, Email: ${email}, Subject: ${subject}`);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting Elyvex Nexus. Our team will review your message shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
