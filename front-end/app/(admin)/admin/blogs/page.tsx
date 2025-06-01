import Blogs from "@/components/admin/pages/blogs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blogs",
  openGraph: {
    title: "Blogs",
    description: "Admin Blogs",
  },
};

const Page = () => {
  return (
    <div>
      <Blogs />
    </div>
  );
};

export default Page;
