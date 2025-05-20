import React from "react";

import { Rating } from "@material-tailwind/react";
import { useGetProductsQuery } from "./productApi";
import { useNavigate } from "react-router";

export default function ProductList() {
  const nav = useNavigate();
  const { isLoading, error, data } = useGetProductsQuery();
  if (isLoading)
    return (
      <h1 className="text-xl font-semibold text-center mt-10">Loading..,</h1>
    );
  if (error) return <h1>{error.data?.message || error?.error}</h1>;
  // console.log(data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 p-6">
      {data &&
        data.map(({ title, rating, price, _id, image }) => (
          <div
            onClick={() => nav(`/products/${_id}`)}
            key={_id}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={`${baseUrl}${image}`}
                alt={title}
              />
            </div>
            <div className="p-4 flex flex-col justify-between h-[150px]">
              <h2 className="text-md font-semibold text-gray-800 line-clamp-2">
                {title}
              </h2>
              <p className="text-blue-600 font-bold text-lg">{price}</p>
              <Rating size="sm" className="mt-1">
                {rating}
              </Rating>
            </div>
          </div>
        ))}
    </div>
  );
}
