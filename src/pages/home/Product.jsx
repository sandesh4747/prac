import { faker } from "@faker-js/faker";
import React, { useState } from "react";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const handleAddProduct = () => {
    const product = {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
    };
    setProducts((prev) => [...prev, product]);
  };

  const handleRemoveProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const handleAddUser = () => {
    const user = {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
    };
    setUsers((prev) => [...prev, user]);
  };

  const handleRemoveUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <button
        className="bg-black text-white px-4 py-2 mb-4"
        onClick={handleAddProduct}
      >
        Add Product
      </button>

      <div className="mb-6">
        {products.map((product) => (
          <div key={product.id} className="mb-2 p-4 bg-white shadow rounded">
            <p className="font-semibold">{product.name}</p>
            <p>${product.price}</p>
            <button
              className="bg-red-500 text-white px-4 py-1 mt-2"
              onClick={() => handleRemoveProduct(product.id)}
            >
              Remove Product
            </button>
          </div>
        ))}
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 mb-4"
        onClick={handleAddUser}
      >
        Add User
      </button>

      <input
        className="border px-4 py-2 mb-4 w-full"
        type="text"
        placeholder="Search User by Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {filteredUsers.map((user) => (
          <div key={user.id} className="mb-2 p-4 bg-white shadow rounded">
            <p className="font-semibold">{user.name}</p>
            <button
              className="bg-red-500 text-white px-4 py-1 mt-2"
              onClick={() => handleRemoveUser(user.id)}
            >
              Remove User
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
