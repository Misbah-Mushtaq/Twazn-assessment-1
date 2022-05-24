import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleFilmViews } from "../store/views/viewsSlice";

const Header = () => {
  const [iconView] = useSelector((state) => {
    return [state.manageViews?.iconView];
  });
  const dispatch = useDispatch();

  const handleView = () => {
    dispatch(handleFilmViews(!iconView));
  };

  return (
    <Navbar expand="lg" bg="light">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/films">Filmware</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
        <Button variant="primary" onClick={handleView}>
          {iconView ? "Switch to Table View" : "Switch to Icon View"}
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
