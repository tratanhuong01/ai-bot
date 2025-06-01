import { z } from "zod";

export const schema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  thumbnail: z.string().min(1, "Thumbnail is required"),
  description: z.string().min(1, "Description is required"),
  content: z.string().min(1, "Content is required"),
  id_category: z.string().min(1, "Category is required"),
  tags: z
    .array(
      z.object({
        id: z.string(),
        value: z.string().min(1, "Tag name is required"),
      })
    )
    .refine((arr) => new Set(arr).size === arr.length, {
      message: "Tags must be unique",
    }),
  tags_temp: z
    .array(
      z.object({
        id: z.string(),
        value: z.string().min(1, "Tag name is required"),
      })
    )
    .refine((arr) => new Set(arr).size === arr.length, {
      message: "Tags must be unique",
    }),
});
