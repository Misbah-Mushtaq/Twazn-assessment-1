import React from "react";
import { Routes, Route } from "react-router-dom";
import { PageNotFound } from "../components/404";
import Films from "../views/Films";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Films />}>
        <Route path="films" element={<Films />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
