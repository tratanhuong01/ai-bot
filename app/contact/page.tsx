import MainLayout from "@/layout/main-layout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
  openGraph: {
    title: "Contact",
  },
};

const ContactPage = () => {
  return (
    <MainLayout headerMode="breadcrumbs" title="Contact Us">
      <div></div>
    </MainLayout>
  );
};
export default ContactPage;
