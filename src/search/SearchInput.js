import React, { Component } from 'react';

class SearchInput extends Component {
  state = {
    query: ''
  };

  handleChange = event => {
    this.setState(
      {
        query: event.target.value
      },
      () => {
        this.props.search(this.state.query);
      }
    );
  };

  render() {
    return (
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          value={this.state.query}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchInput;
