import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Email invalid.").min(1, "Email is required"),
  content: z.string().min(1, "Content is required"),
});
