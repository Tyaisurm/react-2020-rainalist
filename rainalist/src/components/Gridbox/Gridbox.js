import React from "react";

import "./Gridbox.css";

const gridBox = props => (
  <div>
    <Image></Image>
    <h1>{gridBoxTitle}</h1>
    <div>
      <Image></Image>
      <p>{action}</p>
    </div>
  </div>
);

export default gridBox;
