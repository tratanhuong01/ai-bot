import MainLayout from "@/layout/main-layout";
import BlogList from "@/modules/blogs/blog-list";
import React from "react";

const BlogListPage = () => {
  return (
    <MainLayout title="Blogs" headerMode="breadcrumbs">
      <BlogList />
    </MainLayout>
  );
};

export default BlogListPage;
