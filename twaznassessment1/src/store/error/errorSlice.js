import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  errorObj: {
    errorTitle: "",
    errorBody: "",
  },
};
export const errorSlice = createSlice({
  name: "error",
  initialState: initialState,
  reducers: {
    errorsFromAPI: (state, action) => {
      state.errorTitle = action.payload.errorTitle;
      state.errorBody = action.payload.errorBody;
    },
  },
});

export const { errorsFromAPI } = errorSlice.actions;
export default errorSlice.reducer;
