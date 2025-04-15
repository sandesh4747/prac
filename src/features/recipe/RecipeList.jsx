import React from "react";
import { useGetAllRecipesQuery } from "./recipeApi";

export default function RecipeList() {
  const { isLoading, isFetching, refetch, error, data } =
    useGetAllRecipesQuery();

  if (isLoading) {
    return (
      <h1 className="text-center text-2xl font-semibold mt-10">Loading...</h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-center text-red-500 mt-10">Error loading recipes.</h1>
    );
  }

  console.log(data);

  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {data.recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition-all duration-300"
        >
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {recipe.name}
          </h3>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Cuisine:</span> {recipe.cuisine}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Prep Time:</span>
            {recipe.prepTimeMinutes} mins
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Rating:</span> ⭐ {recipe.rating} (
            {recipe.reviewCount} reviews)
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Meal Type:</span>
            {recipe.mealType?.join(", ")}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Tags:</span>
            {recipe.tags?.join(", ")}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <span className="font-semibold">Instructions:</span>
            {recipe.instructions}
          </p>
        </div>
      ))}
    </div>
  );
}
