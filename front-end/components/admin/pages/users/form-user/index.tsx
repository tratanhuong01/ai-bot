"use client";

import { Form } from "@/components/shared/form";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { userService } from "@/services/user.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { ReactNode, useState } from "react";
import FormContent from "../form-content";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../schema";
import { toast } from "sonner";

type FormUserProps = {
  children?: ReactNode;
  id: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  callback?: () => void;
};

const FormUser = ({ children, id, open, setOpen, callback }: FormUserProps) => {
  const [avatar, setAvatar] = useState<File | null>(null);
  const { mutate, isPending } = useMutation({
    mutationKey: ["create-edit-user"],
    mutationFn: async (data: any) => {
      const formData = new FormData();
      formData.append(
        "user",
        JSON.stringify(id ? { ...data, id } : { ...data })
      );
      if (avatar) formData.append("avatar", avatar);
      const result = id
        ? await userService.update(formData)
        : await userService.create(formData);
      return result;
    },
    onSuccess: () => {
      setOpen(false);
      callback?.();
      toast("Success", {
        description: `User ${id ? "updated" : "created"} successfully.`,
      });
    },
    onError: () => {
      toast("Failed", {
        description: "Duplicate email or phone. Please try other email.",
      });
    },
  });
  const { data } = useQuery({
    queryKey: ["get-user-by-id", id],
    queryFn: async () => {
      if (!id) return null;
      const result = await userService.getById(id);
      return result.data;
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>{id ? "Edit" : "Create"} user</DialogTitle>
        <Form
          onSubmit={mutate}
          overflowHidden
          defaultValues={
            data
              ? {
                  ...data,
                  avatar: data.avatar ?? "",
                }
              : {}
          }
          zodResolver={zodResolver(schema)}
        >
          <FormContent
            isLoading={isPending}
            id={id ?? ""}
            setAvatar={setAvatar}
            avatar={avatar}
            data={data}
          />
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default FormUser;
