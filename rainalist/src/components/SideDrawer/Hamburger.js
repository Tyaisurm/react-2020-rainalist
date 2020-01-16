import React from "react";
import "./Hamburger.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const hamburger = props => (
    <FontAwesomeIcon icon="bars" className="hamburger" onClick={props.click}/>
);

export default hamburger;