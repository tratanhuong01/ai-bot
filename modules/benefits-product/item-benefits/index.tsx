import Link from "next/link";
import React from "react";

export type ItemBenefitsProps = {
  // Define the props for ItemBenefits component here if needed
  icon?: string;
  title?: string;
  description?: string;
  //   link?: string;
  // Define the props for ItemBenefits component here
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
      <p className="text-gray-400 line-clamp-3 text-sm md:text-base text-justify">
        {description}
      </p>
      <Link href="/" className="hover:underline">
        Read more
      </Link>
    </div>
  );
};

export default ItemBenefits;
