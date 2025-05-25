import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

// Max size is 5MB.
// const MAX_FILE_SIZE = 5000000;

// function checkFileType(file: File) {
//   if (file?.name) {
//     const fileType = file.name.split(".").pop();
//     if (fileType === "jpg" || fileType === "png" || "webp") return true;
//   }
//   return false;
// }

export const schema = z.object({
  fullname: z.string().min(1, "Name is required"),
  email: z.string().email("Email invalid").min(1, "Email is required"),
  avatar: z.string().optional(),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must not exceed 15 digits")
    .min(1, "Phone number is required")
    .refine(
      (value) => !value || isValidPhoneNumber(value),
      "Phone number invalid"
    ),
  address: z.any().refine((address) => !!address, "Address is required"),
  // avatar: z
  //   .any()
  //   .refine(
  //     (file) => (file ? file.size < MAX_FILE_SIZE : true),
  //     "Max size is 5MB."
  //   )
  //   .refine(
  //     (file) => (!file ? true : checkFileType(file)),
  //     "Only .jpg, .png, .webp formats are supported."
  //   ),
});
