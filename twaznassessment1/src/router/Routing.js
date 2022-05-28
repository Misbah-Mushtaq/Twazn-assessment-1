import React from "react";
import { Routes, Route } from "react-router-dom";
import { PageNotFound } from "../components/404";
import ExchangeRate from "../views/ExchangeRate";
import Films from "../views/Films";
import MainLayout from "../views/MainLayout";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Films />} />
        <Route path="films" element={<Films />} />
        <Route path="exchangeRate" element={<ExchangeRate />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
