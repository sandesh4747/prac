import React from "react";
import ProductList from "../products/ProductList";
import Top5Products from "./Top5Products";

export default function Home() {
  return (
    <div>
      <Top5Products />
      <ProductList />
    </div>
  );
}
