import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { errorsFromAPI } from "../store/error/errorSlice";

const MessageBar = ({ title, body }) => {
  const dispatch = useDispatch();

  const onClose = () => {
    let error = {
      errorTitle: "",
      errorBody: "",
    };
    dispatch(errorsFromAPI(error));
  };
  return (
    <>
      <ToastContainer
        className="p-3"
        position="top-end"
        style={{ zIndex: "999" }}
      >
        <Toast onClose={onClose}>
          <Toast.Header closeButton={true}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{title}</strong>
          </Toast.Header>
          <Toast.Body>{body}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default MessageBar;
