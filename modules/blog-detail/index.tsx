import React from "react";
import BlogContent from "./blog-content";
import BlogCategory from "./blog-category";

const BlogDetail = () => {
  return (
    <div className="flex flex-row gap-8 py-8">
      <BlogContent />
      <BlogCategory />
    </div>
  );
};

export default BlogDetail;
