"use client";

import { FormField } from "@/components/shared/form-field";
import { FormGroup } from "@/components/shared/form-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { generateSlug } from "@/utils";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

type FormContentProps = {
  isLoading?: boolean;
  id: string;
};

const FormContent = ({ isLoading, id }: FormContentProps) => {
  const { watch, setValue } = useFormContext();
  const name = watch("name");
  useEffect(() => {
    setValue("slug", generateSlug(name));
  }, [name]);
  return (
    <div className="flex flex-col gap-2">
      <FormGroup name="name" label="Name">
        <FormField>
          <Input placeholder="Name" />
        </FormField>
      </FormGroup>
      <FormGroup name="slug" label="Slug">
        <FormField>
          <Input placeholder="Slug" />
        </FormField>
      </FormGroup>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {id ? "Update" : "Create"}
      </Button>
    </div>
  );
};

export default FormContent;
