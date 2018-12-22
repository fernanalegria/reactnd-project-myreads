import React, { Component } from 'react';
import BookInterface from './BookInterface';

class Book extends Component {
  onMove = target => {
    this.props.onMove(this.props.book.id, target);
  };

  render() {
    const { book, bookShelves } = this.props;
    return (
      <div className="book">
        <BookInterface
          coverURL={book.imageLinks.thumbnail}
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
