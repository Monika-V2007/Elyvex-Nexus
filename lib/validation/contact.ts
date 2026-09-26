import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s.'-]+$/, "Name contains invalid characters"),
  email: z
    .string()
    .email("Please provide a valid email address")
    .max(255, "Email is too long"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(150, "Subject must be less than 150 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(3000, "Message is too long (max 3000 characters)"),
  honeypot: z.string().optional(), // Anti-spam field (should remain empty)
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
