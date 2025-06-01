import { WrapperCreateBlog } from "@/contexts/CreateBlogContext";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Create Blog",
  openGraph: {
    title: "Create Blog",
    description: "Admin Create Blog",
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
