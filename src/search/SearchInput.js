import React, { Component } from 'react';
import { debounce } from '../utils/AppUtils';
import PropTypes from 'prop-types';

class SearchInput extends Component {
  static propTypes = {
    search: PropTypes.func.isRequired
  };

  state = {
    query: ''
  };

  handleChange = event => {
    this.setState(
      {
        query: event.target.value
      },
      () => {
        debounce(() => {
          this.props.search(this.state.query);
        }, 500)();
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
