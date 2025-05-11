import MainLayout from "@/layout/main-layout";
import ProductList from "@/modules/products";
import React from "react";

const ProductListPage = () => {
  return (
    <MainLayout title="Products" headerMode="breadcrumbs">
      <ProductList />
    </MainLayout>
  );
};

export default ProductListPage;
