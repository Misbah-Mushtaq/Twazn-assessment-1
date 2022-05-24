import React, { useEffect, useState } from "react";
import axios from "axios";
import { filmsAPIs } from "../configurations/api-endpoints";
import { Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { apiLoadingState } from "../store/loader/loaderSlice";
import TableView from "../components/TableView";
import { errorsFromAPI } from "../store/error/errorSlice";
import ListView from "../components/ListView";

const Films = () => {
  const [films, setFilms] = useState([]);
  const [loader, iconView] = useSelector((state) => {
    return [state.loader?.loader, state.manageViews?.iconView];
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
  const conditionalRendering = () => {
    if (loader && films.length == 0) {
      return (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      );
    } else if (films.length > 0) {
      if (iconView) return <ListView data={films} />;
      else return <TableView tableData={films} columns={columns} />;
    } else return <span>NO DATA FOUND</span>;
  };

  useEffect(() => {
    getFilms();
  }, []);

  return <div className="pt-3">{conditionalRendering()}</div>;
};

export default Films;
