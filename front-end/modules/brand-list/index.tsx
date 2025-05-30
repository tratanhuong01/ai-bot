import Image from "next/image";
import React from "react";

const BrandList = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-12 py-4 md:py-10 text-center">
      <Image
        src="https://ainext-react.vercel.app/assets/01-CL3Fgejd.png"
        alt="brand"
        width={200}
        height={55}
        className="object-cover"
      />
      <Image
        src="https://ainext-react.vercel.app/assets/02-DaoU6HDA.png"
        alt="brand"
        width={200}
        height={55}
        className="object-cover"
      />
      <Image
        src="https://ainext-react.vercel.app/assets/03-Cr42kmor.png"
        alt="brand"
        width={200}
        height={55}
        className="object-cover"
      />
      <Image
        src="https://ainext-react.vercel.app/assets/04-9ZN_Zgwh.png"
        alt="brand"
        width={200}
        height={55}
        className="object-cover"
      />
      <Image
        src="https://ainext-react.vercel.app/assets/05-sk2ySReI.png"
        alt="brand"
        width={200}
        height={55}
        className="object-cover"
      />
    </div>
  );
};

export default BrandList;
