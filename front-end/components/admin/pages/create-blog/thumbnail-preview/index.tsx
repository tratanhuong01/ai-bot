"use client";

import ImageContainer from "@/components/shared/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreateBlogContext } from "@/contexts/CreateBlogContext";
import { ImageIcon } from "lucide-react";
import React, { ChangeEvent, memo, useContext, useMemo } from "react";
import { useFormContext } from "react-hook-form";

const ThumbnailPreview = () => {
  const {
    formState: { errors },
    setValue,
  } = useFormContext();
  const {
    custom: { thumbnailNew, thumbnailOld },
    actions: { updateData },
    dispatch,
  } = useContext(CreateBlogContext);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      dispatch(updateData("thumbnailNew", event.target.files[0]));
      setValue("thumbnail", URL.createObjectURL(event.target.files[0]));
    }
  };
  const imageSrc = useMemo(
    () =>
      thumbnailNew
        ? URL.createObjectURL(thumbnailNew)
        : `${process.env.NEXT_PUBLIC_SERVER_URL}/${thumbnailOld}`,
    [thumbnailNew, thumbnailOld]
  );
  return (
    <div className="flex flex-col gap-2">
      <Label className="font-bold">Thumbnail</Label>
      <Input
        type="file"
        onChange={handleChange}
        className="hidden"
        id="thumbnail"
      />
      <div
        className={`w-full h-80 bg-white flex flex-col items-center justify-center rounded-lg text-gray-500 relative ${
          !thumbnailNew && !thumbnailOld
            ? `border-2 border-dashed border-gray-300 shadow-lg`
            : "p-2"
        }`}
      >
        <label htmlFor="thumbnail">
          {thumbnailNew || thumbnailOld ? (
            <ImageContainer
              src={imageSrc}
              className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden object-cover rounded-lg shadow-lg"
              fill
            />
          ) : (
            <>
              <ImageIcon size={60} className="mx-auto" />
              <p className="font-bold mt-2">Upload your file</p>
            </>
          )}
        </label>
      </div>

      {!!errors?.["thumbnail"]?.message && (
        <p className="text-red-500 text-sm pt-1">
          {errors?.["thumbnail"]?.message.toString()}
        </p>
      )}
    </div>
  );
};

export default memo(ThumbnailPreview);
