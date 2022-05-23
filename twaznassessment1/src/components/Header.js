import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleFilmViews } from "../store/views/viewsSlice";
import { apiLoadingState } from "../store/loader/loaderSlice";

const Header = () => {
  const [iconView] = useSelector((state) => {
    return [state.manageViews?.iconView];
  });
  console.log(!iconView, "NOT ICON VIEW");
  const dispatch = useDispatch();

  const handleView = () => {
    dispatch(handleFilmViews(true));
    dispatch(apiLoadingState(true));
  };

  return (
    <Navbar expand="lg" bg="light">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/films">Filmware</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Button variant="light" onClick={handleView}>
              {iconView ? "Icon View" : "Table View"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
