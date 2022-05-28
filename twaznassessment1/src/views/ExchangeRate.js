import React, { useState } from "react";
import axios from "axios";
import { Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { exchangeAPIs } from "../configurations/api-endpoints";
import { apiLoadingState } from "../store/loader/loaderSlice";
import { errorsFromAPI } from "../store/error/errorSlice";

const APIHeaders = { apikey: "n9M16URxeUelItuNWMqvu2B6xm3DkEmH" };

const ExchangeRate = () => {
  const [state, setState] = useState({});
  const [result, setResult] = useState({});

  const dispatch = useDispatch();

  const [loader] = useSelector((state) => {
    return [state.loader?.loader];
  });

  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };

  const exchange = (ev) => {
    ev.preventDefault();
    dispatch(apiLoadingState(true));
    const { amount, exchangeFrom, exchangeTo } = state;
    axios
      .get(exchangeAPIs(exchangeTo, exchangeFrom, amount), {
        headers: APIHeaders,
      })
      .then((response) => {
        console.log(response);
        setResult(response.data);
        dispatch(apiLoadingState(false));
      })
      .catch((error) => {
        let errors = {
          errorTitle: "Exchange Rate",
          errorBody: error?.message,
        };
        dispatch(apiLoadingState(false));
        dispatch(errorsFromAPI(errors));
      });
  };

  return (
    <div className="main-container">
      {loader && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" className="zIndex" />
        </div>
      )}
      {result.result && (
        <h3>
          {result.result} {result.query.to}
        </h3>
      )}
      <form onSubmit={exchange} className="d-flex flex-wrap gap-3">
        <input
          name="amount"
          onChange={handleChange}
          value={state["amount"]}
          placeholder={"Enter amount, Numbers only"}
          className="col-3"
          required
          type="number"
        />
        <input
          name="exchangeFrom"
          onChange={handleChange}
          value={state["exchangeFrom"]}
          pattern="[A-Za-z]{3}"
          placeholder={"Enter 3 letter country code e.g. USD, PKR"}
          className="col-3"
          required
        />
        <input
          name="exchangeTo"
          onChange={handleChange}
          value={state["exchangeTo"]}
          pattern="[A-Za-z]{3}"
          placeholder={"Enter 3 letter country code e.g. USD, PKR"}
          className="col-3"
          required
        />
        <Button type="submit" className="col-3">
          Enter
        </Button>
      </form>
    </div>
  );
};

export default ExchangeRate;
