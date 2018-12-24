import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import * as BooksAPI from '..//utils/BooksAPI';

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
            if (selectedBook) {
              queryBook.shelf = selectedBook.shelf;
            } else {
              queryBook.shelf = 'none';
            }
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

export default SearchBooks;
