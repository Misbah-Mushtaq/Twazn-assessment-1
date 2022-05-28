import React from "react";
import { BarChart } from "./BarChart";
const data = [
  {
    name: "kentcdodds",
    repos: 371,
  },
  {
    name: "sindresorhus",
    repos: 909,
  },
  {
    name: "developit",
    repos: 222,
  },
  {
    name: "getify",
    repos: 43,
  },
  {
    name: "btholt",
    repos: 56,
  },
  {
    name: "kyleshevlin",
    repos: 82,
  },
];
const CurrencyChart = () => {
  return (
    <>
      <BarChart data={data} />
    </>
  );
};

export default CurrencyChart;
