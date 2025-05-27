import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="lg:flex lg:items-center gap-20 py-4 sm:py-10 md:py-20">
      <div className="w-full lg:w-7/12 relative">
        <div style={{ paddingTop: "100%" }} />
        <Image
          src="https://ainext-react.vercel.app/assets/about-2-CzRZEzfO.jpg"
          alt="about"
          className="object-cover rounded-sm"
          fill
        />
      </div>
      <div className="text-gray-400 w-full mt-8 lg:mt-0 lg:w-5/12">
        <span className="bg-[#290481] py-1 px-4 rounded-sm whitespace-nowrap block max-w-min text-white">
          About Us
        </span>
        <p className="text-white font-bold text-2xl md:text-5xl py-2 md:py-6">
          Who We Are – Empowering the Tech-Driven Future
        </p>
        <p className="text-sm md:text-base text-justify">
          nded by developers and creators, we aim to build a community where
          technology is not just news—but a powerful tool to learn, grow, and
          innovate. Join us on our journey to decode the future.
        </p>
        <ul className="flex justify-between items-center py-10">
          <li className="text-white">
            <p className="text-5xl font-bold">5000</p>
            <p>Clients</p>
          </li>
          <li className="text-white">
            <p className="text-5xl font-bold">10k</p>
            <p>Products</p>
          </li>
          <li className="text-white">
            <p className="text-5xl font-bold">250</p>
            <p>Years</p>
          </li>
        </ul>
        <Button className="h-12">About Us</Button>
      </div>
    </div>
  );
};

export default AboutUs;
