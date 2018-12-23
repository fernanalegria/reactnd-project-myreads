import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import SearchBooks from './search/SearchBooks';
import Home from './home/Home';

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
            <Home
              bookShelves={bookShelves}
              books={this.state.books}
              onMove={this.onMove}
            />
          )}
        />
        <Route path="/search" render={() => <SearchBooks />} />
      </div>
    );
  }
}

export default BooksApp;
