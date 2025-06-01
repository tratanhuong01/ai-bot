import Login from "@/components/admin/pages/login";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login",
  openGraph: {
    title: "Login",
    description: "Admin Login",
  },
};

const Page = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default Page;
