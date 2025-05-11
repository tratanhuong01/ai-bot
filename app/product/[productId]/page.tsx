import MainLayout from "@/layout/main-layout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Product details",
  openGraph: {
    title: "Product details",
  },
};

const ProductDetailPage = () => {
  return (
    <MainLayout title="Product detail" headerMode="breadcrumbs">
      <></>
    </MainLayout>
  );
};

export default ProductDetailPage;
