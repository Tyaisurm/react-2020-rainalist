import React from "react";
import { Link } from "react-router-dom";
import DrawerToggleButton from "./DrawerToggleButton";
import SearchBarToggleButton from "./SearchBarToggleButton";
import ShowProfileButton from "./ShowProfileButton.js";
import "./Toolbar.css";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a href="/">RAINALIST</a>
      </div>
      <div className="toolbar__navigation-items">
        <ul>
          <li>
            <SearchBarToggleButton
              searchBarOpen={props.searchShow}
              click={props.searchBarToggleClickHandler}
            />
          </li>
          <li>
            <ShowProfileButton click={props.showProfileButtonClickHandler} />
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
