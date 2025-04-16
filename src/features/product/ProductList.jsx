import React from "react";
import { useGetAllProductsQuery } from "./productApi";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function ProductList() {
  const { isLoading, isFetching, refetch, error, data } =
    useGetAllProductsQuery();

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  console.log(data);

  return (
    <Card className="w-96">
      {data.products.map((product) => (
        <CardBody>
          <div className="mb-4 flex  flex-col items-center justify-between">
            <Typography>{product.title}</Typography>
            <Typography>{product.price}</Typography>
            <Typography>{product.description}</Typography>
            <Typography>{product.category}</Typography>
          </div>
        </CardBody>
      ))}
    </Card>
  );
}
