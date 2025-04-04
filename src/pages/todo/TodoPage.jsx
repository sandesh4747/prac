import React from "react";
import TodoAdd from "./TOdoAdd";
import FormDesign from "./FormDesign";

export default function TodoPage() {
  return (
    <div>
      <h1>THis is Todo page</h1>
      <TodoAdd />
      <div className="flex justify-end items-center">
        {/* <FormDesign /> */}
      </div>
    </div>
  );
}
