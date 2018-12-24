import React, { Component } from 'react';
import { debounce } from '../utils/AppUtils';
import PropTypes from 'prop-types';

/**
 * Search field that lets the user enter queries to find (new and existing) books
 */
class SearchInput extends Component {
  static propTypes = {
    search: PropTypes.func.isRequired
  };

  state = {
    query: ''
  };

  /**
   * Updates the component's state and calls the API
   * only if the elapsed time from the previous query is higher than 500ms
   * @param {Event} event onChange event
   */
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
