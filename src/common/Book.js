import React, { Component } from 'react';
import BookInterface from './BookInterface';

class Book extends Component {
  onMove = (origin, target) => {
    this.props.onMove(this.props.book.id, origin, target);
  };

  render() {
    const { book, bookShelves } = this.props;
    return (
      <div className="book">
        <BookInterface
          book={book}
          bookShelves={bookShelves}
          onMove={this.onMove}
        />
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  }
}

export default Book;
