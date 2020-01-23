import React, { Component } from "react";
import Select from "react-select";

const options = [
  { value: 0, label: "TV" },
  { value: 1, label: "Movies" }
];

class SearchSelect extends Component {
  state = {
    selectedOption: 0
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption }, () =>
      this.props.selectHandler(this.state.selectedOption)
    );
  };
  render() {
    const selectedOption = this.state.selectedOption;

    return (
      <Select
        onChange={this.handleChange}
        options={options}
        placeholder={"Select type..."}
        defaultValue={{ value: 0, label: "TV" }}
      />
    );
  }
}

export default SearchSelect;
