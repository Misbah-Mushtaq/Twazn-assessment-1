import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export const PageNotFound = () => {
  const style = {
    display: "flex",
    alignContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    height: "100vh",
  };

  const navigate = useNavigate();
  const navigator = () => {
    navigate("/films");
  };
  return (
    <div style={style}>
      <h1>404</h1>
      <h6 className="mb-3">Oops! Page doesn't exist or is unavailable</h6>
      <Button variant="primary" onClick={navigator}>
        Go back to home
      </Button>
    </div>
  );
};
