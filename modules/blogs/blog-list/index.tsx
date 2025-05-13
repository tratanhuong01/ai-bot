import React from "react";
import ItemBlog from "../item-blog";

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-6">
      <ItemBlog />
      <ItemBlog />
      <ItemBlog />
      <ItemBlog />
      <ItemBlog />
      <ItemBlog />
    </div>
  );
};

export default BlogList;
