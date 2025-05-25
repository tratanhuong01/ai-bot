import * as z from "zod";

const schema: any = z.object({
  email: z
    .string()
    .email("Email is invalid.")
    .min(1, "Email is a required field."),
  password: z.string().min(1, "Password is a required field."),
});

export default schema;
