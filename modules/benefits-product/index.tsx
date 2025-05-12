import React from "react";
import ItemBenefits, { ItemBenefitsProps } from "./item-benefits";

const benefits: ItemBenefitsProps[] = [
  {
    icon: "bx bx-user",
    title: "User Friendly",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "bx bx-shield",
    title: "Security",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "bx bx-bulb",
    title: "Easy to Use",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "bx bx-support",
    title: "24/7 Support",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const BenefitsProduct = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 py-10">
      {benefits.map((item) => (
        <ItemBenefits key={item.icon} {...item} />
      ))}
    </div>
  );
};

export default BenefitsProduct;
