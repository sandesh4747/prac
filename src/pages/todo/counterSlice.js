export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    resetCounter: (state) => {
      state.value = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(reset, (state, action) => {
      state.value = 0;
    });
  },
});

// Export actions from both slices
export const {} = postSlice.actions;
export const { increment, decrement, incrementByAmount, resetCounter } =
  counterSlice.actions;

// Export reducers
export default {
  post: postSlice.reducer,
  counter: counterSlice.reducer,
};
