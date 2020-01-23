import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import "./LogButton.css";

const logButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <h1>{props.title}</h1>
    <FontAwesomeIcon icon={faSignInAlt} color="black" size="2x" />
  </button>
);

export default logButton;
