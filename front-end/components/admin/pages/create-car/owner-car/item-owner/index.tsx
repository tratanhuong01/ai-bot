"use client";

import ImageContainer from "@/components/shared/image";
import { Button } from "@/components/ui/button";
import { User } from "@/interfaces/user.interface";
import React from "react";
import { useFormContext } from "react-hook-form";

type ItemOwnerProps = {
  user: User;
};

const ItemOwner = ({ user }: ItemOwnerProps) => {
  const { watch, setValue } = useFormContext();
  const owner = watch("owner");
  const handleUpdate = () => {
    setValue("owner", user);
  };
  return (
    <Button
      onClick={handleUpdate}
      type="button"
      variant="ghost"
      className={`shadow-sm border-2 border-solid rounded-sm p-0 h-auto w-full bg-white hover:bg-primary hover:text-white ${
        owner?.id === user?.id
          ? "border-primary bg-primary text-white"
          : "border-gray-100"
      }`}
    >
      <div className="py-10 flex justify-center flex-col">
        <ImageContainer
          src={
            user.avatar
              ? `${process.env.NEXT_PUBLIC_SERVER_URL}/${user.avatar}`
              : `/default-avatar.jpg`
          }
          alt=""
          className="w-24 h-24 rounded-full mx-auto object-cover"
        />
        <p className="text-center font-bold">{user.fullname}</p>
      </div>
    </Button>
  );
};

export default ItemOwner;
