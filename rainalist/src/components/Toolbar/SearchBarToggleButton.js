import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./SearchBarToggleButton.css";

const searchBarToggleButton = props => {
  let icon = faSearch;
  if (props.searchBarOpen) {
    icon = faTimes;
  }
  return (
    <button className="toggle-button" onClick={props.click}>
      <FontAwesomeIcon icon={icon} color="white" size="2x" />
    </button>
  );
};

export default searchBarToggleButton;
