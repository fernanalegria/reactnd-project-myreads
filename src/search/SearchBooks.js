import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import * as BooksAPI from '..//utils/BooksAPI';
import PropTypes from 'prop-types';

class SearchBooks extends Component {
  state = {
    results: []
  };

  search = query => {
    if (query) {
      BooksAPI.search(query).then(queryBooks => {
        if (queryBooks.error) {
          this.setState({
            results: []
          });
        } else {
          const results = queryBooks.map(queryBook => {
            const selectedBook = this.props.selectedBooks.find(
              book => book.id === queryBook.id
            );
            queryBook.shelf = selectedBook ? selectedBook.shelf : 'none';
            return queryBook;
          });
          this.setState({
            results
          });
        }
      });
    } else {
      this.setState({
        results: []
      });
    }
  };

  render() {
    return (
      <div
        className={`search-books ${
          this.state.results.length === 0 ? 'empty-results' : ''
        }`}
      >
        <SearchBar search={this.search} />
        <SearchResults
          books={this.state.results}
          bookShelves={this.props.bookShelves}
          onMove={this.props.onMove}
        />
      </div>
    );
  }
}

SearchBooks.propTypes = {
  bookShelves: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  selectedBooks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      authors: PropTypes.arrayOf(PropTypes.string),
      imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string
      }),
      id: PropTypes.string.isRequired,
      shelf: PropTypes.string.isRequired
    })
  ).isRequired,
  onMove: PropTypes.func.isRequired
};

export default SearchBooks;
