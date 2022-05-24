import React, { useState } from "react";
import { Card } from "react-bootstrap";
import filmIcon from "../assets/images/fast8poster2.jpg";
import FilmDetails from "./FilmDetails";

const ListView = ({ data }) => {
  const [showFilmInfo, setShowFilmInfo] = useState(false);
  const [filmId, setFilmId] = useState("");

  const handleClose = () => {
    setShowFilmInfo(false);
  };
  const handleShow = (id) => {
    setShowFilmInfo(true);
    setFilmId(id);
  };
  return (
    <>
      <div className="d-flex flex-wrap gap-5">
        {data.map((value, index) => {
          return (
            <Card
              style={{ width: "18rem" }}
              key={index}
              className="col-md-4 col-sm-12"
            >
              <Card.Img
                variant="top"
                src={filmIcon}
                className="card-image"
                onClick={() => handleShow(index + 1)}
              />
              <Card.Body>
                <Card.Title>{value.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  {value.opening_crawl}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      {showFilmInfo && (
        <FilmDetails
          show={showFilmInfo}
          handleClose={handleClose}
          id={filmId}
        />
      )}
    </>
  );
};

export default ListView;
