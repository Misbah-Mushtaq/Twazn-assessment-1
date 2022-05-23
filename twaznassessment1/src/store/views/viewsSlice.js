import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  iconView: false,
};
export const viewsSlice = createSlice({
  name: "manageViews",
  initialState: initialState,
  reducers: {
    handleFilmViews: (state, action) => {
      state.iconView = action.payload;
    },
  },
});

export const { handleFilmViews } = viewsSlice.actions;
export default viewsSlice.reducer;
