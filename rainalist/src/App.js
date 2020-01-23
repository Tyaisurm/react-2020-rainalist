import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Searchbar from "./components/Searchbar/Searchbar";
const ComModule = require("./modules/Communication.js");

class App extends Component {
  state = {
    sideDrawerOpen: false,
    searchBarOpen: false,
    session_token: null
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  searchBarToggleClickHandler = () => {
    this.setState(prevState => {
      return { searchBarOpen: !prevState.searchBarOpen };
    });
  };

  showProfileButtonClickHandler = () => {
    console.log("PROFILE TEST");
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false, searchBarOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = (
        <Backdrop click={this.backdropClickHandler} drawerMode={true} />
      );
    } else if (this.state.searchBarOpen) {
      backdrop = (
        <Backdrop click={this.backdropClickHandler} drawerMode={false} />
      );
    }
    return (
      <Router>
        <div style={{ height: "100%" }}>
          <Toolbar
            searchShow={this.state.searchBarOpen}
            drawerClickHandler={this.drawerToggleClickHandler}
            showProfileButtonClickHandler={this.showProfileButtonClickHandler}
            searchBarToggleClickHandler={this.searchBarToggleClickHandler}
          />
          <Searchbar show={this.state.searchBarOpen} />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            logged={
              this.state.session_token !== null &&
              this.state.session_token !== undefined
            }
          />
          {backdrop}
          <main style={{ marginTop: "64px" }}>
            <Switch>
              <Route path="/myslist"></Route>
              <Route path="/profile/mylist/:id"></Route>
              <Route path="/profile/mylist"></Route>
              <Route path="/profile"></Route>
              <Route path="/details/:id"></Route>
              <Route path="/details"></Route>
              <Route path="/*"></Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
