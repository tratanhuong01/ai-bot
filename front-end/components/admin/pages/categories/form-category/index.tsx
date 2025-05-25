"use client";

import { Form } from "@/components/shared/form";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { categoryService } from "@/services/category.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import FormContent from "../form-content";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../schema";

type FormCategoryProps = {
  children?: ReactNode;
  id: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  callback?: () => void;
};

const FormCategory = ({
  children,
  id,
  open,
  setOpen,
  callback,
}: FormCategoryProps) => {
  const { mutate, isPending } = useMutation({
    mutationKey: ["create-edit-category"],
    mutationFn: async (data: any) =>
      id
        ? await categoryService.update({ ...data, id })
        : await categoryService.create(data),
    onSuccess: () => {
      setOpen(false);
      callback?.();
      toast({
        title: `${id ? "Edit" : "Create"} category successfully`,
      });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: `Duplicate name.`,
      });
    },
  });
  const { data } = useQuery({
    queryKey: ["get-category-by-id", id],
    queryFn: async () => {
      if (!id) return null;
      const result = await categoryService.getById(id);
      return result.data;
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>{id ? "Edit" : "Create"} category</DialogTitle>
        <Form
          onSubmit={mutate}
          defaultValues={data && id ? { ...data } : {}}
          zodResolver={zodResolver(schema)}
        >
          <FormContent isLoading={isPending} id={id ?? ""} />
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default FormCategory;
