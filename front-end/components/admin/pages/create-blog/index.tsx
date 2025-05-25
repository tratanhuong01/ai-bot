"use client";

import { Form } from "@/components/shared/form";
import React, { Suspense, useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "@/components/shared/loading";
import { schema } from "./schema";
import FormCreateBlog from "./form-create-blog";
import { CreateBlogContext } from "@/contexts/CreateBlogContext";
import { blogService } from "@/services/blog.service";
import { toast } from "@/hooks/use-toast";

const CreateBlog = () => {
  const {
    custom: { thumbnailNew },
    dispatch,
    actions: { updateData },
  } = useContext(CreateBlogContext);
  const router = useRouter();
  const params = useSearchParams();
  const id = params.get("id") as string;
  const { data, isLoading } = useQuery({
    queryKey: ["fetch-blog", id],
    queryFn: async () => {
      if (!id) return null;
      const result = await blogService.getById("id", id);
      return result?.data ?? null;
    },
  });
  const { mutate, isPending } = useMutation({
    mutationKey: ["create-blog"],
    mutationFn: async (form: any) => {
      const formData = new FormData();
      formData.append(
        "blog",
        JSON.stringify(
          id
            ? {
                ...form,
                id,
                thumbnail: data?.thumbnail,
              }
            : { ...form }
        )
      );
      if (thumbnailNew) formData.append("thumbnail", thumbnailNew);
      const output = id
        ? await blogService.update(formData)
        : await blogService.create(formData);

      router.push("/admin/blogs");
      return output;
    },
    onSuccess: () => {
      toast({
        title: `${id ? "Updated" : "Created"} successfully.`,
      });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Duplicate slug or name.",
      });
    },
  });

  useEffect(() => {
    if (!data) return;

    dispatch(updateData("thumbnailOld", data?.thumbnail));
  }, [data]);
  if (isLoading) return <Loading />;
  return (
    <Suspense fallback={<Loading />}>
      <div className="py-4">
        <Form
          onSubmit={mutate}
          zodResolver={zodResolver(schema)}
          defaultValues={data ? { ...data, owner: data.user } : {}}
        >
          <div className="flex justify-between">
            <p className="font-bold text-2xl">{id ? "Edit" : "Create"} blog</p>
            <div className="flex flex-row gap-2">
              <Button
                onClick={() => router.push(`/admin/blogs`)}
                type="button"
                variant="outline"
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isPending}>
                Save and submit
              </Button>
            </div>
          </div>
          <FormCreateBlog />
        </Form>
      </div>
    </Suspense>
  );
};

export default CreateBlog;
