import { createSlice } from "@reduxjs/toolkit";
import {
  getUserFromLocal,
  removeUserFromLocal,
  setUserToLocal,
} from "../local/local";
export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: getUserFromLocal(),
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      setUserToLocal(state.user);
    },
    /* 
    see login.jsx
    dispatch this action from a React component like this:
                  dispatch(setUser({ name: "Alice", token: "abc123" }));

                  Redux Toolkit automatically wraps that object into an action like this:{
              type: "userSlice/setUser",
              payload: { name: "Alice", token: "abc123" }
            }


            So in the reducer, action.payload is:{ name: "Alice", token: "abc123" }
            That gets assigned to state.user.
            action.payload is the data you send with dispatch().
            */

    removeUser: (state, action) => {
      state.user = null;
      removeUserFromLocal();
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
