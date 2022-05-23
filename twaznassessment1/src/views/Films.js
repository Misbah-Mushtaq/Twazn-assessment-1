import React, { useEffect, useState } from "react";
import axios from "axios";
import { filmsAPIs } from "../configurations/api-endpoints";
import { Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { apiLoadingState } from "../store/loader/loaderSlice";
import TableView from "../components/TableView";
import { errorsFromAPI } from "../store/error/errorSlice";

const Films = () => {
  const [films, setFilms] = useState([]);
  const [loader] = useSelector((state) => {
    return [state.loader?.loader];
  });
  const dispatch = useDispatch();

  const columns = [
    "Title",
    "Episode id",
    "Director",
    "Created",
    "Edited on",
    "Opening crawl",
  ];
  const getFilms = () => {
    dispatch(apiLoadingState(true));
    axios
      .get(filmsAPIs.getFilms)
      .then((response) => {
        dispatch(apiLoadingState(false));
        let results = response.data.results;
        setFilms(results);
      })
      .catch((error) => {
        let errors = {
          errorTitle: "Get films data",
          errorBody: error.response?.data?.detail,
        };
        dispatch(apiLoadingState(false));
        dispatch(errorsFromAPI(errors));
      });
  };
  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div className="pt-3">
      {loader ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <TableView tableData={films} columns={columns} />
      )}
    </div>
  );
};

export default Films;
