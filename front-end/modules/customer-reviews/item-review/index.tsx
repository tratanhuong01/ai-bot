"use client";

import { StarIcon } from "lucide-react";
import React from "react";

const ItemReview = () => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="w-[600px] text-center text-gray-400 text-lg">
        <div className="max-w-min p-2 rounded-sm flex items-cenetr justify-center gap-2 bg-[#614927] mx-auto my-5">
          <StarIcon color="yellow" size={12} />
          <StarIcon color="yellow" size={12} />
          <StarIcon color="yellow" size={12} />
          <StarIcon color="yellow" size={12} />
          <StarIcon color="yellow" size={12} />
        </div>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using
        </p>
        <p className="text-2xl font-semibold py-1.5">Aloin Lden</p>
        <p>Web Developer</p>
      </div>
    </div>
  );
};

export default ItemReview;
