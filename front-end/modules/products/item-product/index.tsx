import { StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const ItemProduct = () => {
  return (
    <div>
      <div className="overflow-hidden relative">
        <div style={{ paddingTop: "70%" }} />
        <div className="absolute top-0 left-0 bottom-0 right-0">
          <Image
            src="/images/member1.jpg"
            alt="team"
            className="w-full h-full object-cover rounded-lg"
            fill
          />
        </div>
      </div>
      <div className="pt-2">
        <h1 className="text-xl hover:underline transition-all duration-400">
          The actual history of machine intelligence
        </h1>
        <div className="flex flex-row gap-2 py-1.5">
          <StarIcon className="text-yellow-500" size={12} />
          <StarIcon className="text-yellow-500" size={12} />
          <StarIcon className="text-yellow-500" size={12} />
          <StarIcon className="text-yellow-500" size={12} />
          <StarIcon className="text-yellow-500" size={12} />
        </div>
        <div>
          <span className="font-bold text-gray-400">56.5$</span>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
