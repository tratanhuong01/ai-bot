import React from "react";
import ItemProduct from "./item-product";

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
      <ItemProduct />
      <ItemProduct />
      <ItemProduct />
      <ItemProduct />
      <ItemProduct />
      <ItemProduct />
    </div>
  );
};

export default ProductList;
