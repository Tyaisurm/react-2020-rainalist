import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Shadow from "./components/Shadow/Shadow";

library.add(faBars, faSearch, faUser)

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  hamburgerToggleHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  shadowClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }
  
  render () {
    let shadow;

    if (this.state.sideDrawerOpen) {
      shadow = <Shadow click={this.shadowClickHandler} />;
    }
  
    return (
      <div style={{height: "100%"}}>
        <Toolbar hamburgerClickHandler={this.hamburgerToggleHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {shadow}
        <main style={{marginTop: "72px"}}>
          <p>This is content.</p>
        </main>
      </div>
    );
  }
}

export default App;
