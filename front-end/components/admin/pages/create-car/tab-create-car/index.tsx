import EditorCustom from "@/components/shared/edit-custom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { memo } from "react";
import ImageList from "../image-list";
import FormInformation from "../form-information";
import { useFormContext } from "react-hook-form";
import OwnerCar from "../owner-car";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";

const TabCreateCar = () => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const content = watch("content");
  const owner = watch("owner");
  const informations = watch("informations");
  const checInformations = () => {
    if (!informations.vehicle_options) return false;
    const result = Object.keys(informations.vehicle_options).filter(
      (key) => informations.vehicle_options[key].value
    );
    return Object.keys(informations.vehicle_options).length === result.length;
  };
  return (
    <div className="mt-4">
      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-[600px] grid-cols-4">
          <TabsTrigger value="content">
            Content{" "}
            {!!errors.content?.message && (
              <XCircleIcon className="text-red-500 ml-2" size={15} />
            )}
            {!errors.content?.message && !!content && (
              <CheckCircleIcon className="text-green-500 ml-2" size={15} />
            )}
          </TabsTrigger>
          <TabsTrigger value="images">
            Images <CheckCircleIcon className="text-green-500 ml-2" size={15} />
          </TabsTrigger>
          <TabsTrigger value="informations">
            Informations{" "}
            {!!errors.informations && (
              <XCircleIcon className="text-red-500 ml-2" size={15} />
            )}
            {!errors.informations && checInformations() && (
              <CheckCircleIcon className="text-green-500 ml-2" size={15} />
            )}
          </TabsTrigger>
          <TabsTrigger value="owner">
            Owner{" "}
            {!!errors.owner?.message && (
              <XCircleIcon className="text-red-500 ml-2" size={15} />
            )}
            {!errors.owner?.message && !!owner && (
              <CheckCircleIcon className="text-green-500 ml-2" size={15} />
            )}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="content">
          <EditorCustom
            value={content}
            setValue={(value) => setValue("content", value)}
            className="w-full h-[1024px]"
            label="Content"
          />
        </TabsContent>
        <TabsContent value="images">
          <ImageList />
        </TabsContent>
        <TabsContent value="informations">
          <FormInformation />
        </TabsContent>
        <TabsContent value="owner">
          <OwnerCar />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default memo(TabCreateCar);
