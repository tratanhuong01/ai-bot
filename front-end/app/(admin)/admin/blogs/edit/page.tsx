import { WrapperCreateBlog } from "@/contexts/CreateBlogContext";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Edit Blog",
  openGraph: {
    title: "Edit Blog",
    description: "Admin Edit Blog",
  },
};

const Page = () => {
  return (
    <div>
      <WrapperCreateBlog />
    </div>
  );
};

export default Page;
