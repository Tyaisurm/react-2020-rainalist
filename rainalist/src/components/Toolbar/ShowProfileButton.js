import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./ShowProfileButton.css";

const showProfileButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <FontAwesomeIcon icon={faUser} color="white" size="2x" />
  </button>
);

export default showProfileButton;
