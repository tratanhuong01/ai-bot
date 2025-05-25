"use client";

import React from "react";
import ItemBlog from "../item-blog";
import { useQuery } from "@tanstack/react-query";
import { blogService } from "@/services/blog.service";
import { Blog } from "@/interfaces/blog.interface";

const BlogList = () => {
  const { data } = useQuery({
    queryKey: ["blogs"],
    queryFn: () =>
      blogService.search({
        pagable: {
          offset: 0,
          limit: 6,
        },
      }),
    refetchOnWindowFocus: false,
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-6">
      {data?.data?.map((blog: Blog) => (
        <ItemBlog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
