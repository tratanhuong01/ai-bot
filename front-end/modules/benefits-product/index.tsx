import React from "react";
import ItemBenefits, { ItemBenefitsProps } from "./item-benefits";

const benefits: ItemBenefitsProps[] = [
  {
    icon: "bx bx-user",
    title: "User Friendly",
    description:
      "Designed with simplicity in mind, our interface is intuitive and easy to navigate for users of all experience levels.",
  },
  {
    icon: "bx bx-shield",
    title: "Security",
    description:
      "Your data is protected with industry-leading security measures, ensuring privacy and peace of mind at every step.",
  },
  {
    icon: "bx bx-bulb",
    title: "Easy to Use",
    description:
      "No complex setup or training required — get started quickly and accomplish tasks efficiently with our streamlined system.",
  },
  {
    icon: "bx bx-support",
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to assist you whenever you need help, no matter the time zone.",
  },
];

const BenefitsProduct = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 py-4 md:py-10">
      {benefits.map((item) => (
        <ItemBenefits key={item.icon} {...item} />
      ))}
    </div>
  );
};

export default BenefitsProduct;
