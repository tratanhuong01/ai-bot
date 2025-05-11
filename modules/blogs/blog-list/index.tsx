import React from "react";
import ItemBlog from "../item-blog";

const BlogList = () => {
  return (
    <div className="grid grid-cols-3 gap-4 my-6">
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
