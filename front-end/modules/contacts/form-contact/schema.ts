import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Email invalid.").min(1, "Email is required"),
  phone: z
    .string()
    .min(1, "Slug is required")
    .max(10, "Phone number must be 10 characters long"),
  subject: z.string().min(1, "Subject is required"),
  content: z.string().min(1, "Content is required"),
});
