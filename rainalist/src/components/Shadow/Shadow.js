import React from "react";
import "./Shadow.css";

const shadow = props => (
    <div className="shadow" onClick={props.click} />
);

export default shadow;