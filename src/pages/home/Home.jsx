import React from "react";
import UIColor from "./UIColor";
import CounterApp from "./CounterApp";
import DarkMode from "./DarkMode";
import PasswordToggle from "./PasswordToggle";
import LikeDislike from "./LikeDislike";
import TemperatureConverter from "./TemperatureConverter";
import Todo from "./Todo";
import Click from "./Click";
import TodoList from "./TodoList";
import TodoTod from "./TodoTod";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex gap-7 items-center justify-center p-7">
      <Link to="/todo1" className="text-blue-500 hover:underline">
        Todo1
      </Link>
      <Link to="/todo2" className="text-blue-500 hover:underline">
        Todo2
      </Link>
      <Link to="/product" className="text-blue-500 hover:underline">
        ProductList
      </Link>
      {/* <UIColor /> */}
      {/* <CounterApp /> */}
      {/* <DarkMode /> */}
      {/* <PasswordToggle /> */}
      {/* <LikeDislike /> */}
      {/* <TemperatureConverter /> */}
      {/* <Todo /> */}
      {/* <Click /> */}
      {/* <TodoList /> */}
    </div>
  );
}
