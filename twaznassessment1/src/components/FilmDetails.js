import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { filmsAPIs } from "../configurations/api-endpoints";
import { apiLoadingState } from "../store/loader/loaderSlice";
import { errorsFromAPI } from "../store/error/errorSlice";
import { useDispatch } from "react-redux";
import { formatDate } from "../utils";

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
        <Modal.Body className="film-details-body">
          <div className="d-flex gap-3">
            <label className="text-black-50">Director</label>
            <span>{filmDetail.director}</span>
          </div>
          <div className="d-flex gap-3">
            <label className="text-black-50">Producer</label>
            <span>{filmDetail.producer}</span>
          </div>
          <div className="d-flex gap-3">
            <label className="text-black-50">Created</label>
            <span>{formatDate(filmDetail.created)}</span>
          </div>
          <div className="d-flex gap-3">
            <label className="text-black-50">Edited</label>
            <span>{formatDate(filmDetail.edited)}</span>
          </div>
          <div className="d-flex gap-3">
            <label className="text-black-50">Director</label>
            <span>{filmDetail.director}</span>
          </div>
          <div className="d-flex gap-3">
            <label className="text-black-50">Producer</label>
            <span>{filmDetail.producer}</span>
          </div>
        </Modal.Body>
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
