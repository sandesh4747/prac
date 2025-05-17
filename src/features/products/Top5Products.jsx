import React from "react";
import { Carousel } from "@material-tailwind/react";
import { useGetTop5ProductsQuery } from "./productApi";
import { baseUrl } from "../../app/mainApi";

export default function Top5Products() {
  const { isLoading, error, data } = useGetTop5ProductsQuery();

  if (isLoading)
    return (
      <div className="h-[400px] flex items-center justify-center">
        Loading...
      </div>
    );
  if (error) return <h1>{error.data?.message || error?.error}</h1>;
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
      <div className="rounded-xl overflow-hidden shadow-lg">
        <Carousel autoplay loop className="h-[400px]">
          {data?.map(({ _id, image, title }) => (
            <div key={_id} className="relative h-full w-full">
              <img
                src={`${baseUrl}${image}`}
                alt={title}
                className="h-full w-full object-contain bg-gray-100"
                loading="lazy"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/30">
                <div className="w-3/4 text-center md:w-2/4">
                  <h3 className="text-xl font-bold text-white md:text-3xl">
                    {title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
