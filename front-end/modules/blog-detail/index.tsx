import React from "react";
import BlogContent from "./blog-content";
import BlogCategory from "./blog-category";

const BlogDetail = () => {
  return (
    <div className="lg:flex lg:flex-row gap-8 py-8 items-start">
      <BlogContent />
      <BlogCategory />
    </div>
  );
};

export default BlogDetail;
