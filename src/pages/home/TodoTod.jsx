import { faker } from "@faker-js/faker";
import React, { useState } from "react";

export default function TodoTod() {
  const [items, setItems] = useState([]);

  const handleItem = () => {
    const user = {
      id: faker.string.ulid(),
      image: faker.image.avatarGitHub(),
      username: faker.internet.displayName(),
      email: faker.internet.email(),
      reaction: faker.internet.emoji(),
    };
    setItems((prev) => [...prev, user]);
  };

  const handleRemove = (ind) => {
    setItems((prev) => prev.filter((_, i) => i !== ind));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <button
        onClick={handleItem}
        className="mb-6 bg-blue-500 text-white px-5 py-3 rounded-lg shadow-md hover:bg-blue-600 transition cursor-pointer "
      >
        Add User
      </button>

      <div className="w-full max-w-lg space-y-4">
        {items.map((item, i) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt="User Avatar"
                className="w-12 h-12 rounded-full border border-gray-300"
              />
              <div>
                <p className="text-lg font-semibold">{item.username}</p>
                <p className="text-sm text-gray-500">{item.email}</p>
                <p className="text-xl">{item.reaction}</p>
              </div>
            </div>

            <button
              onClick={() => handleRemove(i)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition cursor-pointer"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
