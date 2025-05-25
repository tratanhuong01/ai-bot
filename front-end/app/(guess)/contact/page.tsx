import MainLayout from "@/layout/main-layout";
import FormContact from "@/modules/contacts/form-contact";
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
      <FormContact />
    </MainLayout>
  );
};
export default ContactPage;
