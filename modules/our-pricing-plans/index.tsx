"use client";

import React from "react";
import ItemPrice from "./item-price";

const pricePlans: any = {
  student: {
    name: "Student",
    price: 20,
    sale: 0,
    options: ["One accountt", "Unlimited Projects", "Download prototypes"],
  },
  personal: {
    name: "Personal",
    price: 39,
    sale: 0,
    options: ["One accountt", "Unlimited Projects", "Download prototypes"],
  },
  family: {
    name: "Family",
    price: 620,
    sale: 0,
    options: ["One accountt", "Unlimited Projects", "Download prototypes"],
  },
};

const OutPricingPlans = () => {
  const [active] = React.useState(1);
  return (
    <div className="flex flex-col gap-8 py-8 our-pricing-plans">
      <span className="bg-[#290481] py-1 px-4 rounded-sm whitespace-nowrap mx-auto block max-w-min">
        Best Pricing Plans
      </span>
      <p className="text-5xl font-bold text-center">Our Pricing Plans</p>
      <div className="gird-cols-1 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {Object.keys(pricePlans).map((key, index) => (
          <ItemPrice
            key={key}
            crownName={pricePlans[key].name}
            price={pricePlans[key].price}
            options={pricePlans[key].options}
            active={active === index}
          />
        ))}
      </div>
    </div>
  );
};

export default OutPricingPlans;
