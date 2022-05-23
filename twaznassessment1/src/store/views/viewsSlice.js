import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  iconView: false,
};
debugger;
export const viewsSlice = createSlice({
  name: "manageViews",
  initialState: initialState,
  reducers: {
    handleFilmViews: (state, action) => {
      debugger;
      console.log(action);
      state.iconView = action.payload;
    },
  },
});

export const { handleFilmViews } = viewsSlice.actions;
export default viewsSlice.reducer;
