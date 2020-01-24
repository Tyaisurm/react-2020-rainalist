import React, { Component } from "react";
import "./SearchBox.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-bootstrap-typeahead/css/Typeahead-bs4.css";
import {
  asyncContainer,
  Typeahead,
  Menu,
  MenuItem,
  menuItemContainer
} from "react-bootstrap-typeahead";
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
    const TypeaheadMenuItem = menuItemContainer(MenuItem);
    return (
      <div className={"z-89"}>
        <AsyncTypeahead
          isLoading={this.state.isLoading}
          minLength={2}
          maxResults={9}
          paginate
          options={this.state.options}
          isLoading={this.state.isLoading}
          onSearch={this._handleSearch}
          useCache={true}
          placeholder="Search by name..."
          searchText="Searching..."
          emptyLabel="No results :c"
          ignoreDiacritics={true}
          clearButton={true}
          disabled={!this.props.show}
          labelKey={result => `${result.name} (${result.original_name})`}
          renderMenuItemChildren={option => (
            <div>
              {option.name}
              <div>
                <small>
                  Alt name: <span>{option.original_name}</span>
                </small>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
  _handleSearch = query => {
    this.setState({ isLoading: true });
    fetch(`${this.state.apiURL}${query}`)
      .then(resp => resp.json())
      .then(json => {
        console.log(json.results);
        this.setState({
          isLoading: false,
          options: json.results
        });
      });
  };
}

export default SearchBox;
