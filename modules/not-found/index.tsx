"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-6 justify-center w-[500px] mx-auto py-12 text-center">
      <Image
        src="/images/not-found.png"
        alt=""
        width={500}
        height={500}
        className="object-cover mx-auto"
      />
      <p className="text-3xl font-bold">Oops! That page can't be found</p>
      <p className="text-gray-300">
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
      <Button onClick={() => router.push("/")} className="w-40 mx-auto h-12">
        Back to home
      </Button>
    </div>
  );
};

export default NotFound;
