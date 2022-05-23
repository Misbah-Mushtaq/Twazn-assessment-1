import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: false,
};
export const loaderSlice = createSlice({
  name: "loader",
  initialState: initialState,
  reducers: {
    apiLoadingState: (state, action) => {
      state.loader = action.payload;
    },
  },
});

export const { apiLoadingState } = loaderSlice.actions;
export default loaderSlice.reducer;
