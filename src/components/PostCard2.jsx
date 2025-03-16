import React from "react";

export default function PostCard2({ card }) {
  return (
    <div className="w-[400px] flex flex-col  shadow-xl rounded-xl overflow-hidden bg-white  ">
      <img
        className=" overflow-hidden w-full h-[250px] object-cover "
        src={card.imageUrl}
        alt={card.title}
      />
      <div className="p-4 space-y-4">
        <h2 className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-2xl font-semibold">
          {card.title}
        </h2>
        <div className="space-y-2 text-gray-800">
          <p className="text-lg font-semibold text-indigo-600 border-b-2 border-indiogo-600 inline-block">
            Detail:
          </p>
          <p className="text-lg text-gray-700">{card.detail}</p>

          <p className="text-orange-600 border-b-2 border-orange-600 inline-block text-lg font-semibold ">
            Recipe:
          </p>
          <p className="text-lg text-gray-700">{card.recipe}</p>
        </div>

        <div>
          <p className="text-lg font-semibold  text-teal-600 border-b-2 border-teal-600 inline-block">
            Ingredients:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {card.ingredients.map((ingredients, i) => (
              <li key={i} className="text-lg">
                {ingredients}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
