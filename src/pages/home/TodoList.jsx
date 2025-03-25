import { faker } from "@faker-js/faker";
import React, { useState } from "react";

export default function TodoList() {
  const [users, setUsers] = useState([]);
  // const [show, setShow] = useState(false);
  // const handleSHow = () => {
  //   setShow((prev) => !prev);
  // };
  const handleRemove = (index) => {
    // const numbers = [11, 22, 33, 44, 55];
    // numbers.splice(1, 1)

    // console.log(numbers);
    users.splice(index, 1);
    setUsers((prev) => [...prev]);
  };
  const handleUser = () => {
    const user = {
      id: faker.string.ulid(),
      image: faker.image.avatarGitHub(),
      username: faker.internet.displayName(),
      email: faker.internet.email(),
      reaction: faker.internet.emoji(),
    };
    // setUsers([...users, user]);

    setUsers((prev) => [...prev, user]);

    // const handleRemove = () => {
    //   setUsers((prev) => prev.filter((r) => r.id !== user.id));
    // };
  };
  return (
    <div className="p-5">
      {/* <h1 className="text-xl font-semibold">{`${show}`}</h1>
      {show && (
        <h2 className="text-2xl font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
          velit ipsa et quaerat possimus id vitae libero laudantium quas amet.
        </h2>
      )} */}
      <button
        className="bg-black text-white px-4 py-1 cursor-pointer"
        onClick={handleUser}
      >
        Add User
      </button>
      {users.map((user, i) => {
        return (
          <div key={user.id} className="text-xl flex">
            <div>
              <p className="font-semibold">{user.username}</p>

              <p>{user.email}</p>
              <p>{user.reaction}</p>
              <p>
                <img src={user.image} className="h-[100px]" alt="" />
              </p>
            </div>
            <div>
              <button
                onClick={() => handleRemove(i)}
                className="bg-pink-400 text-white px-2 cursor-pointer"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
