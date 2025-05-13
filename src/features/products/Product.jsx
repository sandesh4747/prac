import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useGetProductQuery } from "./productApi";
import { Button, Card, IconButton, Rating } from "@material-tailwind/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { setToCart } from "../carts/cartSlice";

export default function Product() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductQuery(id);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mx-auto max-w-md mt-8">
        <p className="font-bold">Error</p>
        <p>{error}</p>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="h-64 md:h-80 lg:h-96 w-full overflow-hidden bg-gray-100">
          <img
            className="h-full w-full object-contain p-4"
            src={`http://localhost:5000${data.image}`}
            alt={data.title}
          />
        </div>

        {/* Product Info Section */}
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                {data.category}
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-2">
                {data.title}
              </h2>
              <p className="text-gray-600 text-sm mt-1">{data.brand}</p>
            </div>
            <p className="text-blue-600 font-bold text-xl md:text-2xl">
              ${data.price}
            </p>
          </div>

          <div className="mt-4 flex items-center">
            <Rating
              value={Math.round(data.rating)}
              readonly
              className="flex items-center"
            />
            <span className="text-gray-600 text-sm ml-2">
              ({data.rating.toFixed(1)})
            </span>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold text-gray-800">Description</h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              {data.description}
            </p>
          </div>

          <ProductAddToCart product={data} />
        </div>
      </div>
    </div>
  );
}

function ProductAddToCart({ product }) {
  const nav = useNavigate();
  const { carts } = useSelector((state) => state.cartSlice);
  // console.log(carts);
  const isExistCart = carts.find((cart) => cart._id === product._id);
  const { user } = useSelector((state) => state.userSlice);
  // console.log(user);
  const [count, setCount] = useState(isExistCart?.qty || 1);
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(
      setToCart({
        title: product.title,
        image: product.image,
        price: product.price,
        qty: count,
        _id: product._id,
      })
    );
    nav("/carts");
  };
  /*   
  this just to check the values of below fields
  const h = () => {
    const cartItem = {
      title: product.title,
      image: product.image,
      price: product.price,
      qty: count,
      _id: product._id,
    };
    console.log(cartItem);
  };
  h();*/

  return (
    <Card className="flex items-center space-y-7 justify-center">
      <h1>Product Add</h1>
      <div className="flex gap-3">
        <IconButton
          disabled={count === 1}
          size="sm"
          onClick={() => setCount((c) => c - 1)}
        >
          <MinusIcon className="h-10 w-5" />
        </IconButton>
        <h1>{count}</h1>
        <IconButton size="sm" onClick={() => setCount((c) => c + 1)}>
          <PlusIcon className="h-10 w-5" />
        </IconButton>
      </div>
      <Button onClick={handleCart} disabled={!user || user?.role === "Admin"}>
        Add To Cart
      </Button>
    </Card>
  );
}
