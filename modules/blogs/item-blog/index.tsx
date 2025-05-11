import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ItemBlog = () => {
  return (
    <div className="overflow-hidden relative">
      <div style={{ paddingTop: "100%" }} />
      <div className="absolute top-0 left-0 bottom-0 right-0">
        <Image
          src="/images/member1.jpg"
          alt="team"
          className="w-full h-full object-cover rounded-lg"
          fill
        />
        <div className="absolute bottom-2 left-0 px-4">
          <Link href="/blog/1">
            <h1 className="text-3xl hover:underline transition-all duration-400">
              The actual history of machine intelligence
            </h1>
          </Link>
          <p className="text-gray-300 pt-2">
            March 18, 2223 | 5 min read | by{" "}
          </p>
        </div>
      </div>
      <Link href="/blog/1">
        <div
          className="w-24 h-24 rounded-full bg-black hover:bg-[#871CFF] absolute -top-12 -right-12 cursor-pointer pt-[56px] pl-5 
          transition-all duration-200"
        >
          <ArrowLeftIcon className="transform rotate-[135deg]" size={18} />
        </div>
      </Link>
    </div>
  );
};

export default ItemBlog;
