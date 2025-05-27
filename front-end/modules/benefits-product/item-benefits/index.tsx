import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";
import React from "react";

export type ItemBenefitsProps = {
  icon?: string;
  title?: string;
  description?: string;
  //   link?: string;
};
const ItemBenefits = ({
  icon,
  title,
  description,
}: //   link,
ItemBenefitsProps) => {
  return (
    <div className="flex flex-col gap-1 md:gap-2">
      <i className={`${icon} text-3xl md:text-5xl`}></i>
      <p className="text-xl md:text-3xl font-semibold text-white">{title}</p>
      <Tooltip>
        <TooltipTrigger>
          <p className="text-gray-400 line-clamp-3 text-sm md:text-base text-justify">
            {description}
          </p>
        </TooltipTrigger>
        <TooltipContent className="w-80">
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
      <Link href="/" className="hover:underline">
        Read more
      </Link>
    </div>
  );
};

export default ItemBenefits;
