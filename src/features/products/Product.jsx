import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useGetProductQuery } from "./productApi";
import { Button, IconButton, Rating } from "@material-tailwind/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { setToCart } from "../carts/cartSlice";

export default function Product() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductQuery(id);

  if (isLoading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;
  // console.log(data);
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="md:w-1/2 bg-gray-100 rounded-lg p-4 flex items-center justify-center">
          <img
            className="max-h-80 object-contain"
            src={`http://localhost:5000${data.image}`}
            alt={data.title}
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <div className="flex items-center gap-2">
            <Rating value={Math.round(data.rating)} />
            <span>({data.rating.toFixed(1)})</span>
          </div>

          <div className="text-lg font-semibold">${data.price}</div>

          <div className="text-sm text-gray-600">
            <span className="font-medium">Brand:</span> {data.brand}
          </div>

          <div className="text-sm text-gray-600">
            <span className="font-medium">Category:</span> {data.category}
          </div>

          <p className="text-gray-700">{data.description}</p>

          <ProductAddToCart product={data} />
        </div>
      </div>
    </div>
  );
}

function ProductAddToCart({ product }) {
  const nav = useNavigate();
  const { carts } = useSelector((state) => state.cartSlice);
  const isExistCart = carts.find((cart) => cart._id === product._id);
  const { user } = useSelector((state) => state.userSlice);
  const [count, setCount] = useState(isExistCart?.qty || 1);
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(
      setToCart({
        title: product.title,
        image: product.image,
        price: product.price,
        qty: count, // <-- this is added manually by US ,there is no such field as qty in database
        _id: product._id,
      })
    );
    /* this just to check the values of below fields
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
  h();
*/
    nav("/carts");
  };

  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center gap-4">
        <IconButton
          variant="outlined"
          disabled={count === 1}
          onClick={() => setCount((c) => c - 1)}
        >
          <MinusIcon className="h-4 w-4" />
        </IconButton>
        <span className="w-8 text-center">{count}</span>
        <IconButton variant="outlined" onClick={() => setCount((c) => c + 1)}>
          <PlusIcon className="h-4 w-4" />
        </IconButton>
      </div>

      {/* Tooltip-like message */}
      {/* {(!user || user?.role === "Admin") && (
        <div className="text-sm text-red-500 text-center">
          {!user
            ? "Please log in to add items to cart."
            : "Admins cannot add items to cart."}
        </div>
      )} */}
      <Button
        fullWidth
        onClick={handleCart}
        disabled={!user || user?.role === "Admin"}
      >
        Add to Cart
      </Button>
    </div>
  );
}
