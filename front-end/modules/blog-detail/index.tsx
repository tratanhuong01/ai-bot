"use client";

import React from "react";
import BlogContent from "./blog-content";
import BlogCategory from "./blog-category";
import { Blog } from "@/interfaces/blog.interface";

export type BlogDetailProps = {
  blog?: Blog;
};

const BlogDetail = ({ blog }: BlogDetailProps) => {
  return (
    <div className="lg:flex lg:flex-row gap-8 py-8 items-start">
      <BlogContent blog={blog} />
      <BlogCategory blog={blog} />
    </div>
  );
};

export default BlogDetail;
