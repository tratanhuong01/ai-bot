import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ItemComment = () => {
  return (
    <div className="border-b border-dashed flex items-start gap-4 py-4">
      <Image
        src="https://ainext-react.vercel.app/assets/us-1-eKUFeC2R.jpg"
        alt="blog detail"
        width={50}
        height={50}
        className="rounded-full object-cover"
      />
      <div className="flex-1 text-gray-400 flex flex-col">
        <p className="font-bold text-xl">Joln Jones</p>
        <p className="text-sm font-thin">April 24, 2019 at 10:59 am</p>
        <p className="my-2">
          Lorem Ipsum has been the industry’s standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen.
        </p>
        <Button
          variant="outline"
          className="bg-transparent border-dashed rounded-full max-w-min"
        >
          Reply
        </Button>
      </div>
    </div>
  );
};

export default ItemComment;
