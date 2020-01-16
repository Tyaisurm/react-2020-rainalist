import React from "react";
import "./Toolbar.css";
import Hamburger from "../SideDrawer/Hamburger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_nav">
            <div>
            <Hamburger click={props.hamburgerClickHandler} />
            </div>
            <div className="toolbar_logo"><a href="/">RAINALIST</a></div>
            <div className="toolbar_space"></div>
            <div className="toolbar_nav_items">
                <ul>
                    <li><FontAwesomeIcon icon="search" href="/" /></li>
                    <li><FontAwesomeIcon icon="user" href="/" /></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;