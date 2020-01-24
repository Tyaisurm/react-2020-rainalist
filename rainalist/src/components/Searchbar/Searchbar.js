import React, { Component } from "react";
import SearchBox from "./SearchBox";
import Select from "react-select";
import SearchSelect from "./SearchSelect";
import "./Searchbar.css";

class Searchbar extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    mode: 0
  };
  selectHandler = arg => {
    this.setState({ mode: arg.value });
  };
  render() {
    let searchbarClasses = "searchbar-container";
    if (this.props.show) {
      searchbarClasses = "searchbar-container open";
    }
    return (
      <div className={searchbarClasses}>
        <div>
          <SearchSelect selectHandler={this.selectHandler} />
        </div>
        <div>
          <SearchBox show={this.props.show} mode={this.state.mode} />
        </div>
      </div>
    );
  }
}

export default Searchbar;
