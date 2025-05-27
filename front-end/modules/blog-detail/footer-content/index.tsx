import { Blog } from "@/interfaces/blog.interface";
import { TagIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type FooterContentProps = {
  blog?: Blog;
};

const FooterContent = ({ blog }: FooterContentProps) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between justify-start md:items-center py-1 gap-4 md:gap-0 md:py-3">
      {blog?.tags && blog.tags.length > 0 ? (
        <div className="flex items-center gap-2">
          <span className="font-bold">Tags:</span>
          {blog.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blogs?tag=${tag}`}
              className="text-blue-500 hover:underline"
            >
              <TagIcon className="inline-block mr-1" />
              {tag}
            </Link>
          ))}
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex items-center gap-2">
        <span className="font-bold">Share:</span>
        <Link
          href=""
          className="w-8 h-8 rounded-full flex items-center justify-center bg-[#3B5998] text-white"
        >
          <i className="bx bxl-facebook" />
        </Link>
        <Link
          href=""
          className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1DA1F2] text-white"
        >
          <i className="bx bxl-twitter" />
        </Link>
        <Link
          href=""
          className="w-8 h-8 rounded-full flex items-center justify-center bg-[#007BB5] text-white"
        >
          <i className="bx bxl-linkedin" />
        </Link>
        <Link
          href=""
          className="w-8 h-8 rounded-full flex items-center justify-center bg-[#C13584] text-white"
        >
          <i className="bx bxl-instagram" />
        </Link>
      </div>
    </div>
  );
};

export default FooterContent;
