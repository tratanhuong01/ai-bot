"use client";

import { Form } from "@/components/shared/form";
import Loading from "@/components/shared/loading";
import { Button } from "@/components/ui/button";
import { CreateBlogContext } from "@/contexts/CreateBlogContext";
import { blogService } from "@/services/blog.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useContext, useEffect } from "react";
import { toast } from "sonner";
import { v4 } from "uuid";
import FormCreateBlog from "./form-create-blog";
import { schema } from "./schema";

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
    refetchOnWindowFocus: false,
  });
  const { mutate, isPending } = useMutation({
    mutationKey: ["create-blog"],
    mutationFn: async (form: any) => {
      $$.loading(true);
      const formData = new FormData();
      delete form.tags_temp;
      formData.append(
        "tags",
        JSON.stringify(
          form.tags?.length ? form.tags?.map((item: any) => item.value) : null
        )
      );
      delete form.tags;
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
      return output;
    },
    onSuccess: () => {
      $$.loading(false);
      router.push("/admin/blogs");
      toast(`${id ? "Updated" : "Created"} successfully.`);
    },
    onError: () => {
      $$.loading(false);
      toast("Duplicate slug or name.");
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
          defaultValues={
            data
              ? {
                  ...data,
                  tags_temp:
                    data?.tags?.map((item: any) => ({
                      id: v4(),
                      value: item,
                    })) ?? [],
                  tags:
                    data?.tags?.map((item: any) => ({
                      id: v4(),
                      value: item,
                    })) ?? [],
                }
              : {}
          }
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
              <Button className="bg-primary" type="submit" disabled={isPending}>
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
