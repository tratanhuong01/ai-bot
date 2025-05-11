import { Button } from "@/components/ui/button";
import { CrownIcon } from "lucide-react";
import React from "react";

type ItemPriceProps = {
  active?: boolean;
  crownName: string;
  price: number;
  options?: string[];
};

const ItemPrice = ({
  active,
  crownName = "",
  price = 0,
  options = [],
}: ItemPriceProps) => {
  return (
    <div
      className={`${
        active ? "bg-[#7F00FF]" : "bg-[#0F0E16]"
      } p-6 rounded-sm hover:scale-105 transition-transform duration-300 cursor-pointer shadow-sm`}
    >
      <div className="flex items-center gap-1">
        <CrownIcon />
        <span className="text-3xl font-bold">{crownName}</span>
      </div>
      <p className="py-4">
        <span className="text-7xl font-bold">${price}</span>{" "}
        <span className="">/ per month</span>
      </p>
      <hr
        className={`${active ? "border-gray-400" : "border-gray-900"} my-6`}
      />
      {options.length > 0 && (
        <ul className="list-disc ml-4">
          {options.map((option) => (
            <li key={option} className="mb-2">
              {option}
            </li>
          ))}
        </ul>
      )}
      <Button
        className={`h-12 mt-6 w-full bg-white text-black ${
          active
            ? "hover:text-[#7F00FF] hover:bg-white"
            : "hover:bg-[#7F00FF] hover:text-white "
        } transition-colors duration-300`}
      >
        Buy Now
      </Button>
    </div>
  );
};

export default ItemPrice;
