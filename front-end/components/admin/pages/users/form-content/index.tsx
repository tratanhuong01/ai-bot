"use client";

import { FormField } from "@/components/shared/form-field";
import { FormGroup } from "@/components/shared/form-group";
import ImageContainer from "@/components/shared/image";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { locationService } from "@/services/location.service";
import { UploadIcon } from "lucide-react";
import React from "react";
import { useFormContext } from "react-hook-form";
import { v4 } from "uuid";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { cn } from "@/lib/utils";

type FormContentProps = {
  isLoading?: boolean;
  id: string;
  setAvatar: (file: File | null) => void;
  avatar: File | null;
  data: any;
};

const FormContent = ({
  isLoading,
  id,
  setAvatar,
  avatar,
}: FormContentProps) => {
  const {
    setValue,
    formState: { errors },
    watch,
    clearErrors,
  } = useFormContext();
  const avatarUrl = watch("avatar");
  const address = watch("address");
  const phone = watch("phone");
  const onLoadOptions = async (name: string) => {
    const result = await locationService.fetchByQuery(name);
    return result?.features.map((item: any) => ({
      id: v4(),
      label: item?.properties?.display_name,
      value: item?.properties?.display_name,
      item: {
        display_name: item?.properties?.display_name,
        locations: item?.geometry?.coordinates,
      },
    }));
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center">
        <Input
          id="avatar-user"
          type="file"
          className="hidden"
          onChange={(event) => {
            if (!event.target.files?.[0]) return;
            setAvatar(event.target.files[0]);
          }}
          accept="*.png,*.jpg,*.webp"
        />
        <Label htmlFor="avatar-user">
          <div className="w-28 h-28 rounded-full bg-gray-200 flex justify-center items-center overflow-hidden">
            {avatar ? (
              <ImageContainer
                src={URL.createObjectURL(avatar)}
                className="w-28 h-28 object-cover"
              />
            ) : avatarUrl ? (
              <ImageContainer
                src={`${process.env.NEXT_PUBLIC_SERVER_URL}/${avatarUrl}`}
                className="w-28 h-28 object-cover"
              />
            ) : (
              <UploadIcon className="text-gray-500" />
            )}
          </div>
        </Label>
      </div>
      {errors?.avatar?.message?.toString() && (
        <p className="text-red-500 text-sm pt-1">
          {errors?.avatar?.message?.toString()}
        </p>
      )}
      <div className="grid grid-cols-2 gap-2">
        <FormGroup name="fullname" label="Fullname">
          <FormField>
            <Input placeholder="Fullname" />
          </FormField>
        </FormGroup>
        <FormGroup label="Phone" name="phone">
          <PhoneInput
            onChange={(value: any) => {
              if (!value) return;
              setValue("phone", value);
              if (isValidPhoneNumber(value)) {
                clearErrors("phone");
              }
            }}
            value={phone}
            placeholder="Phone/Whatsapp/Zalo"
            className={cn(
              "phone_input flex h-9 pl-14 w-full rounded-md border border-input bg-white outline-none focus:outline-none px-3 py-1.5 text-sm"
            )}
          />
        </FormGroup>
      </div>
      <FormGroup name="email" label="Email">
        <FormField>
          <Input placeholder="Email" />
        </FormField>
      </FormGroup>
      <FormGroup name="address" label="Locations">
        <FormField>
          <Combobox<any>
            placeholder={address ? address?.display_name : "Search location"}
            onLoadOptions={onLoadOptions}
            onValueChange={(data) => setValue("address", data)}
          />
        </FormField>
      </FormGroup>
      <FormGroup name="password" label="Password">
        <FormField>
          <Input placeholder="Password" />
        </FormField>
      </FormGroup>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {id ? "Update" : "Create"}
      </Button>
    </div>
  );
};

export default FormContent;
