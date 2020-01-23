import React from "react";
import LogButton from "./LogButton";
import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  let logButtonTitle = "Log In";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  if (props.logged) {
    logButtonTitle = "Log Out";
  }
  return (
    <nav className={drawerClasses}>
      <h1>RAINALIST</h1>
      <LogButton title={logButtonTitle} />
      <ul>
        <li>
          <a href="/">Trending</a>
        </li>
        <li>
          <a href="/profile/masterlist/watching">Watching</a>
        </li>
        <li>
          <a href="/profile/masterlist/ptw">Plan to Watch</a>
        </li>
        <li>
          <a href="/profile/mylists">(My custom lists)</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
