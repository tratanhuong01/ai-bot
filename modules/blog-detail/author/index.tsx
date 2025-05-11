import Image from "next/image";
import React from "react";

const Author = () => {
  return (
    <div className="relative mt-8">
      <div className="h-24 bg-gradient" />
      <Image
        src="https://ainext-react.vercel.app/assets/us-1-eKUFeC2R.jpg"
        alt="blog detail"
        width={90}
        height={90}
        className="absolute top-12 left-8 border-2 border-white object-cover"
      />
      <div className="text-gray-400 px-8 pb-8 pt-20 bg-[#0C1923]">
        <p className="text-white text-xl font-semibold">Chris Orwig</p>
        <p className="mt-2 mb-4">Photographer, Author, Writer</p>
        <p>
          Chris Orwig is a celebrated photographer, author, and writer who
          brings passion to everything he does. Lorem ipsum dolor sit amet
          consectetur adipisicing elit sed do eiusmod tempor.
        </p>
      </div>
    </div>
  );
};

export default Author;
