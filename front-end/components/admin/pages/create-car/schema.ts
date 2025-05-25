import { z } from "zod";
import specifications from "@/static/specifications.json";

export const generateDefaultValue = () => {
  const object: any = {};
  specifications.vehicle_options.forEach((item) => {
    object[item.field] = {
      name: item.name,
      value: "",
    };
  });
  return object;
};

const generateInformation = () => {
  let object: any = {};
  specifications.vehicle_options.forEach((item) => {
    object = {
      ...object,
      [item.field]: z.object({
        name: z.string().default(item.name),
        value: z.string().min(1),
      }),
    };
  });
  return z.object({
    vehicle_options: z.object(object),
    features: z.array(z.string()),
  });
};

export const schema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required"),
  thumbnail: z.string().min(1, "Thumbnail is required"),
  description: z.string().min(1, "Description is required"),
  content: z.string().min(1, "Content is required"),
  price: z.string().min(1, "Price is required"),
  sale: z.coerce.number().min(0).max(100).default(0),
  informations: generateInformation(),
  owner: z.any().refine((val) => !!val, "Owner is required"),
});
