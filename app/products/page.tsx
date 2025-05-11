import MainLayout from "@/layout/main-layout";
import ProductList from "@/modules/products";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Products",
  openGraph: {
    title: "Products",
  },
};

const ProductListPage = () => {
  return (
    <MainLayout title="Products" headerMode="breadcrumbs">
      <ProductList />
    </MainLayout>
  );
};

export default ProductListPage;
