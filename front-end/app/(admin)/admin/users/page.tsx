import Users from "@/components/admin/pages/users";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Users",
  openGraph: {
    title: "Users",
    description: "Admin Users",
  },
};

const Page = () => {
  return (
    <div>
      <Users />
    </div>
  );
};

export default Page;
