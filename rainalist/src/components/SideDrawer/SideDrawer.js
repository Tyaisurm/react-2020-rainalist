import React from "react";
import "./SideDrawer.css";

const sideDrawer = props => {
    let drawerClasses = "drawer";
    if (props.show) {
        drawerClasses = "drawer drawerOpen";
    }
    return(
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Trending</a></li>
                <li><a href="/">Watching</a></li>
                <li><a href="/">Plan to Watch</a></li>
                <li><a href="/">Completed</a></li>
                <li><a href="/">My Custom Lists</a></li>
            </ul>
            <div className="version">Version 0.0.1</div>
        </nav>
    );
};

export default sideDrawer;