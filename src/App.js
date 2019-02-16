import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import SearchBooks from './search/SearchBooks';
import Home from './home/Home';
import { rootUrl } from './index';

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

  onMove = (id, origin, target) => {
    BooksAPI.update({ id }, target).then(() => {
      if (origin === 'none') {
        BooksAPI.get(id).then(book => {
          this.setState(prevState => ({
            books: [...prevState.books, book]
          }));
        });
      } else {
        let books = [...this.state.books];
        if (target === 'none') {
          const bookIndex = books.findIndex(bk => bk.id === id);
          books.splice(bookIndex, 1);
        } else {
          const book = books.find(bk => bk.id === id);
          book.shelf = target;
        }
        this.setState({
          books
        });
      }
    });
  };

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path={rootUrl}
          render={() => (
            <Home
              bookShelves={bookShelves}
              books={books}
              onMove={this.onMove}
            />
          )}
        />
        <Route
          path={`${rootUrl}/search`}
          render={() => (
            <SearchBooks
              bookShelves={bookShelves}
              selectedBooks={books}
              onMove={this.onMove}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
