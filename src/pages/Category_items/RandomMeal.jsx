import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RandomMeal() {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const nav = useNavigate();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      setData(response.data.meals[0]);
      setLoad(false);
    } catch (err) {
      setLoad(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (load) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-gray-700">Loading......</h1>
      </div>
    );
  }
  return (
    <div className="max-w-md mx-auto my-8 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h1 className="text-3xl font-extrabold text-center mb-5 text-amber-600 tracking-wide">
        🍽 Random Meal
      </h1>

      {data && (
        <div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <img
              src={data.strMealThumb}
              alt={data.strMeal}
              className="w-full h-56 object-cover transition-transform transform hover:scale-105 duration-300"
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-4 text-center">
            {data.strMeal}
          </h2>

          <div className="flex justify-center gap-3 mt-2">
            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
              {data.strCategory}
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
              {data.strArea}
            </span>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-700 mb-1">
              📜 Instructions:
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {data.strInstructions}
            </p>
          </div>

          <button
            onClick={getData}
            className="mt-5 w-full py-3 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            🔄 Get Another Meal
          </button>
        </div>
      )}
    </div>
  );
}
