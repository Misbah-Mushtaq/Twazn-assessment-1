import React from "react";
import { Table } from "react-bootstrap";
import { formatDate } from "../utils";
import AccordianData from "./AccordianData";

const TableView = ({ tableData, columns }) => {
  return (
    <Table bordered hover responsive>
      <thead>
        <tr>
          {columns.map((value, index) => {
            return (
              <th
                key={index}
                style={{ width: value !== "Opening crawl" ? "12%" : "auto" }}
              >
                {value}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {tableData.map((value, index) => {
          return (
            <tr key={index}>
              <td>{value.title}</td>
              <td>{value.episode_id}</td>
              <td>{value.director}</td>
              <td>{formatDate(value.created)}</td>
              <td>{formatDate(value.edited)}</td>
              <td>
                <AccordianData
                  bodyContent={value.opening_crawl}
                  accordianHeader={value.title}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableView;
