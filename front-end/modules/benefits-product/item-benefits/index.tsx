"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import useComingSoon from "@/hooks/use-coming-soon";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
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
  const { comingSoonContent, handleComingSoon } = useComingSoon(true);
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
      <Button
        variant="ghost"
        onClick={handleComingSoon}
        className="hover:underline mt-1"
      >
        Read more
      </Button>
      {comingSoonContent}
    </div>
  );
};

export default ItemBenefits;
