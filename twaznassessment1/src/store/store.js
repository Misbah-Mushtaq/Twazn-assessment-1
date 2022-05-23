import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loader/loaderSlice";
import viewsReducer from "./views/viewsSlice";
import errorReducer from "./error/errorSlice";

const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem("applicationState", JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem("applicationState") !== null) {
    return JSON.parse(localStorage.getItem("applicationState")); // re-hydrate the store
  }
};
export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    manageViews: viewsReducer,
    error: errorReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
