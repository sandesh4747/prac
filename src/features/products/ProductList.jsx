import React from "react";
import { useGetProductsQuery } from "./productApi";

export default function ProductList() {
  const { isLoading, error, data } = useGetProductsQuery();
  if (isLoading) return <h1>Loading..,</h1>;
  if (error) return <h1>{error}</h1>;
  console.log(data);
  return (
    <div className="grid grid-cols-4">
      {data &&
        data.map((product) => <div key={product._id}>{product.brand}</div>)}
    </div>
  );
}
