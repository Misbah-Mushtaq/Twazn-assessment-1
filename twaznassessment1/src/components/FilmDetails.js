import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { filmsAPIs } from "../configurations/api-endpoints";
import { apiLoadingState } from "../store/loader/loaderSlice";
import { errorsFromAPI } from "../store/error/errorSlice";
import { useDispatch } from "react-redux";

const FilmDetails = ({ handleClose, show, id }) => {
  const [filmDetail, setFilmDetail] = useState({});

  const dispatch = useDispatch();
  const getFilmDetails = () => {
    dispatch(apiLoadingState(true));
    axios
      .get(filmsAPIs.getFilmById + id)
      .then((response) => {
        dispatch(apiLoadingState(false));
        console.log(response);
        setFilmDetail(response.data);
      })
      .catch((error) => {
        let errors = {
          errorTitle: "Get film details",
          errorBody: error.response?.data?.detail,
        };
        dispatch(apiLoadingState(false));
        dispatch(errorsFromAPI(errors));
      });
  };

  useEffect(() => {
    getFilmDetails();
  }, [id]);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{filmDetail.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FilmDetails;
