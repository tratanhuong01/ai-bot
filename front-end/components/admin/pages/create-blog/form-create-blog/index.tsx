"use client";

import EditorCustom from "@/components/shared/edit-custom";
import { FormField } from "@/components/shared/form-field";
import { FormGroup } from "@/components/shared/form-group";
import { Input } from "@/components/ui/input";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ThumbnailPreview from "../thumbnail-preview";
import { generateSlug } from "@/utils";
import { SelectField } from "@/components/shared/select";
import { useQuery } from "@tanstack/react-query";
import { categoryService } from "@/services/category.service";
import ModalTags from "@/app/(admin)/admin/blogs/tags";

const FormCreateBlog = () => {
  const { setValue, watch } = useFormContext();
  const description = watch("description");
  const content = watch("content");
  const title = watch("title");
  const tags = watch("tags");
  useEffect(() => {
    setValue("slug", generateSlug(title));
  }, [title]);
  const { data: categories } = useQuery({
    queryKey: ["fetch-categories"],
    queryFn: async () => {
      const result = await categoryService.search({});
      return result.data;
    },
  });
  return (
    <div>
      <div className="mt-8 flex flex-row gap-8">
        <div className="w-1/2 flex flex-col gap-4">
          <FormGroup name="title" label="Title" standard>
            <FormField>
              <Input
                type="text"
                className="bg-white focus-visible:ring-0"
                placeholder="Title"
              />
            </FormField>
          </FormGroup>
          <FormGroup name="slug" label="Slug" standard>
            <FormField>
              <Input
                type="text"
                className="bg-white focus-visible:ring-0"
                placeholder="Slug"
              />
            </FormField>
          </FormGroup>
          <div className="flex-1">
            <EditorCustom
              value={description}
              setValue={(value) => setValue("description", value)}
              className="flex-1"
              label="Description"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="text-sm font-semibold text-gray-700">
              {" "}
              Tags:
            </label>
            <div className="flex gap-3 items-center flex-wrap">
              <div className="flex gap-2 items-center flex-wrap">
                {!!tags?.length && (
                  <span className="py-1 px-2 text-primary font-bold">
                    {tags?.length} tags
                  </span>
                )}
              </div>

              <ModalTags />
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <FormGroup name="id_category" label="Category" standard>
            <FormField>
              <SelectField
                options={
                  categories?.map((item: any) => ({
                    label: item.name,
                    value: item.id,
                  })) ?? []
                }
                onChange={(event) =>
                  setValue("id_category", event.target.value)
                }
                placeholder="Select category"
              />
            </FormField>
          </FormGroup>
          <div className="flex-1">
            <ThumbnailPreview />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <EditorCustom
          value={content}
          setValue={(value) => setValue("content", value)}
          className="w-full h-[1024px]"
          label="Content"
        />
      </div>
    </div>
  );
};

export default FormCreateBlog;
