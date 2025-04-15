import React from "react";
import { useGetAllProductsQuery } from "./productApi";

export default function ProductList() {
  const { isLoading, isFetching, refetch, error, data } =
    useGetAllProductsQuery();

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  console.log(data);

  return (
    <div>
      {data.products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <p>{product.description}</p>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  );
}
