"use client";

import { Form } from "@/components/shared/form";
import React, { Suspense, useContext, useEffect } from "react";
import FormCreateCar from "./form-create-car";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { generateDefaultValue, schema } from "./schema";
import { useMutation, useQuery } from "@tanstack/react-query";
import { CreateCarContext } from "@/contexts/CreateCarContext";
import { carService } from "@/services/car.service";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "@/components/shared/loading";
import { toast } from "@/hooks/use-toast";

const CreateCar = () => {
  const {
    custom: { imagesNew, thumbnailNew, imagesDelete, imagesOld },
    dispatch,
    actions: { updateData },
  } = useContext(CreateCarContext);
  const router = useRouter();
  const params = useSearchParams();
  const id = params.get("id") as string;
  const { data, isLoading } = useQuery({
    queryKey: ["fetch-car", id],
    queryFn: async () => {
      if (!id) return null;
      const result = await carService.getById("id", id);
      return result?.data ?? null;
    },
  });
  const { mutate, isPending } = useMutation({
    mutationKey: ["create-car"],
    mutationFn: async (form: any) => {
      const formData = new FormData();
      const id_user = form.owner?.id;
      delete form.owner;
      formData.append(
        "car",
        JSON.stringify({
          ...form,
          ...(id ? { id } : {}),
          thumbnail: data?.thumbnail,
          id_user,
        })
      );
      if (thumbnailNew) formData.append("thumbnail", thumbnailNew);
      imagesNew.forEach((file) => {
        formData.append(id ? "imagesNew" : "images", file);
      });
      if (id) {
        formData.append("imagesDelete", JSON.stringify(imagesDelete));
        formData.append("imagesOld", JSON.stringify(imagesOld));
      }
      const output = id
        ? await carService.update(formData)
        : await carService.create(formData);
      router.push("/admin/cars");
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

    dispatch(updateData("imagesOld", data?.images?.list ?? []));
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
              ? { ...data, owner: data?.user, price: data?.price.toString() }
              : {
                  informations: {
                    vehicle_options: generateDefaultValue(),
                    features: [],
                  },
                  sale: 0,
                }
          }
        >
          <div className="flex justify-between">
            <p className="font-bold text-2xl">{id ? "Edit" : "Create"} car</p>
            <div className="flex flex-row gap-2">
              <Button
                onClick={() => router.push(`/admin/cars`)}
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
          <FormCreateCar />
        </Form>
      </div>
    </Suspense>
  );
};

export default CreateCar;
