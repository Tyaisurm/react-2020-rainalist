import React from "react";

import "./Backdrop.css";

const backdrop = props => {
  let classes;
  if (props.drawerMode) {
    classes = "backdrop z-150";
  } else {
    classes = "backdrop z-50";
  }
  return <div className={classes} onClick={props.click} />;
};

export default backdrop;
