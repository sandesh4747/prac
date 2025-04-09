import { createSlice } from "@reduxjs/toolkit";
import { getFromLocal, setToLocal } from "../../local/loca_storage";

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: getFromLocal(),
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      setToLocal(state.todos);
    },
    updateTodo: (state, action) => {
      //Todo:
    },
    removeTodo: (state, action) => {
      console.log("Payload:", action.payload);
      state.todos.splice(action.payload, 1);
      setToLocal(state.todos);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
