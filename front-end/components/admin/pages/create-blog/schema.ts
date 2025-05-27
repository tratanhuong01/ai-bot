import { z } from "zod";

export const schema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  thumbnail: z.string().min(1, "Thumbnail is required"),
  description: z.string().min(1, "Description is required"),
  content: z.string().min(1, "Content is required"),
  id_category: z.string().min(1, "Category is required"),
  // tags: z
  //   .array(z.string().min(1, "Tag is required."))
  //   .min(1, "At least one tag is required"),
});
