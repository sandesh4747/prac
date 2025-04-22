import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const fetchProducts = async () => {
    try {
      setLoading(true);
      // const response = await fetch(
      //   `https://dummyjson.com/products?limit=20&skip=${
      //     count === 0 ? 0 : count * 20
      //   }`
      // );
      const response = await axios.get("https://dummyjson.com/products", {
        params: {
          limit: 20,
          skip: count === 0 ? 0 : count * 20,
        },
      });
      // const result = await response.json();
      // console.log(result);
      // if(result && result.products && result.length){setProducts(result.data)}
      setProducts((prev) => [...prev, ...response.data.products]);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  useEffect(() => {
    fetchProducts();
  }, [count]);

  // console.log(products);
  if (loading) {
    return <div>Loading data! Please wait!</div>;
  }
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item, index) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load more Products
        </button>
        {disableButton ? <p>you have reached to hundreds products</p> : null}
      </div>
    </div>
  );
}
