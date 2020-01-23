import React, { Component } from "react";
import {
  asyncContainer,
  Typeahead,
  Menu,
  MenuItem
} from "react-bootstrap-typeahead";
import "./SearchBox.css";
const ComModule = require("../../modules/Communication");
const AsyncTypeahead = asyncContainer(Typeahead);

class SearchBox extends Component {
  state = {
    isLoading: false,
    options: [],
    mode: 0,
    apiURL: ""
  };
  render() {
    console.log(this.props);
    if (this.props.mode != this.state.mode) {
      let apiURLtemp = ComModule.getSearchAPI();
      if (this.props.mode === 0) {
        apiURLtemp = apiURLtemp[0];
      } else {
        apiURLtemp = apiURLtemp[1];
      }
      this.setState({ mode: this.props.mode, apiURL: apiURLtemp });
    } else if (this.state.apiURL === "") {
      let apiURLtemp = ComModule.getSearchAPI();
      this.setState({ apiURL: apiURLtemp[0] });
    }
    if (!this.props.show) {
    }
    return (
      <div className={"z-89"}>
        <AsyncTypeahead
          allowNew={false}
          isLoading={false}
          multiple={false}
          minLength={2}
          options={this.state.options}
          isLoading={this.state.isLoading}
          onSearch={this._handleSearch}
          placeholder="Search by name..."
          labelKey={option => `${option.name} (${option.original_name})`}
          renderMenu={(results, menuProps) => (
            <Menu {...menuProps}>
              {results.map((result, index) => (
                <MenuItem option={result.id} position={index}>
                  {result.name}
                </MenuItem>
              ))}
            </Menu>
          )}
          ref={ref => (this._typeahead = ref)}
        />
      </div>
    );
  }

  _handleSearch = query => {
    this.setState({ isLoading: true });
    fetch(`${this.state.apiURL}${query}`)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          isLoading: false,
          options: json.results
        });
      });
  };
}

export default SearchBox;
