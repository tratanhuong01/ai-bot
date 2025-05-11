import MainLayout from "@/layout/main-layout";
import BlogList from "@/modules/blogs/blog-list";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blogs",
  openGraph: {
    title: "Blogs",
  },
};

const BlogListPage = () => {
  return (
    <MainLayout title="Blogs" headerMode="breadcrumbs">
      <BlogList />
    </MainLayout>
  );
};

export default BlogListPage;
