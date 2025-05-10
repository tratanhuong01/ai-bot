import MainLayout from "@/layout/main-layout";
import BlogDetail from "@/modules/blog-detail";
import React from "react";

const BlogPage = () => {
  return (
    <MainLayout headerMode="breadcrumbs" title="Blog details">
      <BlogDetail />
    </MainLayout>
  );
};

export default BlogPage;
