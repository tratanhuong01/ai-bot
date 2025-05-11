import MainLayout from "@/layout/main-layout";
import BlogDetail from "@/modules/blog-detail";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog details",
  openGraph: {
    title: "Blog details",
  },
};

const BlogPage = () => {
  return (
    <MainLayout headerMode="breadcrumbs" title="Blog details">
      <BlogDetail />
    </MainLayout>
  );
};

export default BlogPage;
