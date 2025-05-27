"use client";

import { Blog } from "@/interfaces/blog.interface";
import { getImageUrl } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

type ItemBlogProps = {
  blog?: Blog;
  isLoading?: boolean;
};

const ItemBlog = ({ blog, isLoading = false }: ItemBlogProps) => {
  const href = `/blog/${blog?.slug}`;
  if (isLoading) {
    return (
      <div className="overflow-hidden relative animate-pulse bg-slate-700 rounded-sm">
        <div style={{ paddingTop: "100%" }} />
        <div className="absolute top-0 left-0 bottom-0 right-0">
          <div className="absolute bottom-2 left-0 px-4 w-full">
            <div className="tline-clamp-1 h-4 bg-slate-800 w-full animae-pulse rounded-sm" />
            <div className="line-clamp-1 h-4 w-1/2 bg-slate-800 mt-2 mb-4 animate-pulse rounded-sm" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="overflow-hidden relative">
      <div style={{ paddingTop: "100%" }} />
      <div className="absolute top-0 left-0 bottom-0 right-0">
        <Image
          src={getImageUrl(blog?.thumbnail ?? "/images/team.jpg")}
          alt="team"
          className="w-full h-full object-cover rounded-lg opacity-70 hover:opacity-100 transition-all duration-300"
          fill
        />
        <div className="absolute bottom-2 left-0 px-4">
          <Link href={href}>
            <h1 className="text-xl md:text-3xl hover:underline transition-all duration-400 line-clamp-2">
              {blog?.title ?? "Blog Title"}
            </h1>
          </Link>
          <p className="text-gray-300 pt-2 text-sm md:text-base">
            {moment(blog?.created_at).format("MMMM D, YYYY")}
          </p>
        </div>
      </div>
      <Link href={href}>
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
