import MainLayout from "@/layout/main-layout";
import NotFound from "@/modules/not-found";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Not Found",
  openGraph: {
    title: "Not Found",
  },
};

const NotFoundPage = () => {
  return (
    <MainLayout headerMode="none">
      <NotFound />
    </MainLayout>
  );
};

export default NotFoundPage;
