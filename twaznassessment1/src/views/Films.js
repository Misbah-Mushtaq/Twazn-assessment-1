import React, { useEffect, useState } from "react";
import axios from "axios";
import { filmsAPIs } from "../configurations/api-endpoints";

import TableView from "../components/TableView";
import { Button } from "react-bootstrap";

const Films = () => {
  const [films, setFilms] = useState([]);
  const [iconView, setIconView] = useState(false);

  const columns = [
    "Title",
    "Episode id",
    "Director",
    "Created",
    "Edited on",
    "Opening crawl",
  ];
  const getFilms = () => {
    axios
      .get(filmsAPIs.getFilms)
      .then((response) => {
        let results = response.data.results;
        setFilms(results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div className="p-2">
      <Button
        variant="primary"
        onClick={() => {
          setIconView(!iconView);
        }}
      >
        {iconView ? "Icon view" : "Table view"}
      </Button>
      <TableView tableData={films} columns={columns} />
    </div>
  );
};

export default Films;
