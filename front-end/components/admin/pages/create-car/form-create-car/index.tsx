"use client";

import EditorCustom from "@/components/shared/edit-custom";
import { FormField } from "@/components/shared/form-field";
import { FormGroup } from "@/components/shared/form-group";
import { Input } from "@/components/ui/input";
import React, { useEffect } from "react";
import TabCreateCar from "../tab-create-car";
import ThumbnailPreview from "../thumbnail-preview";
import { useFormContext } from "react-hook-form";
import { generateSlug } from "@/utils";

const FormCreateCar = () => {
  const { setValue, watch } = useFormContext();
  const description = watch("description");
  const name = watch("name");
  useEffect(() => {
    setValue("slug", generateSlug(name));
  }, [name]);
  return (
    <div>
      <div className="mt-8 flex flex-row gap-8">
        <div className="w-1/2 flex flex-col gap-4">
          <FormGroup name="name" label="Name" standard>
            <FormField>
              <Input
                type="text"
                className="bg-white focus-visible:ring-0"
                placeholder="Name"
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
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-2 w-full">
            <FormGroup name="price" label="Price" standard>
              <FormField>
                <Input
                  type="number"
                  className="w-full bg-white focus-visible:ring-0"
                  placeholder="Price"
                />
              </FormField>
            </FormGroup>
            <FormGroup name="sale" label="Sale" standard>
              <FormField>
                <Input
                  type="text"
                  className="w-full bg-white focus-visible:ring-0"
                  placeholder="Sale"
                />
              </FormField>
            </FormGroup>
          </div>
          <ThumbnailPreview />
        </div>
      </div>
      <TabCreateCar />
    </div>
  );
};

export default FormCreateCar;
