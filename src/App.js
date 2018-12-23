import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';
import Header from './home/Header';
import ListShelves from './home/ListShelves';
import { Route, Link } from 'react-router-dom';

const bookShelves = [
  {
    value: 'currentlyReading',
    title: 'Currently Reading'
  },
  {
    value: 'wantToRead',
    title: 'Want to Read'
  },
  {
    value: 'read',
    title: 'Read'
  }
];

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      });
    });
  }

  onMove = (id, target) => {
    BooksAPI.update({ id }, target).then(() => {
      const books = [...this.state.books];
      const book = books.find(bk => bk.id === id);
      if (book) {
        book.shelf = target;
        this.setState({
          books
        });
      }
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <Header />
              <ListShelves
                bookShelves={bookShelves}
                books={this.state.books}
                onMove={this.onMove}
              />
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
        <Route
          path="/search"
          render={() => (
            <div className="search-books">
              <div className="search-books-bar">
                <Link to="/" className="close-search">
                  Close
                </Link>
                <div className="search-books-input-wrapper">
                  {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
                  <input type="text" placeholder="Search by title or author" />
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid" />
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
