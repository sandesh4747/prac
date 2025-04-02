import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useApiHooks from "../../hooks/apihooks";

export default function CategoryItems() {
  const { label } = useParams();

  const nav = useNavigate();

  const { id } = useParams();
  const [data, err, load] = useApiHooks(
    "https://www.themealdb.com/api/json/v1/1/filter.php",

    {
      c: label,
    }
  );

  if (load) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-gray-700">Loading......</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data &&
          data.meals.map((meal) => (
            <div
              onClick={() => nav(`/item-detail/${meal.idMeal}`)}
              key={meal.idMeal}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <img
                className="w-full h-48 object-cover"
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <p className="p-4 text-lg font-medium text-gray-800">
                {meal.strMeal}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
