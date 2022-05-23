import React from "react";
import { Accordion } from "react-bootstrap";

const AccordianData = ({ bodyContent, accordianHeader }) => {
  return (
    <Accordion>
      <Accordion.Header>{accordianHeader}</Accordion.Header>
      <Accordion.Body>{bodyContent}</Accordion.Body>
    </Accordion>
  );
};

export default AccordianData;
