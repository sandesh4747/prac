import React from "react";
import ProductList from "../products/ProductList";
import Top5Products from "../products/Top5Products";
import AdminPage from "../admin/AdminPage";
import ProductAddForm from "../admin/ProductAddForm";

export default function Home() {
  return (
    <div>
      <Top5Products />
      <ProductList />
      <ProductAddForm />
    </div>
  );
}
