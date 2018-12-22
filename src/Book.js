import React from 'react';
import BookInterface from './BookInterface';

const Book = props => {
  const { book, bookShelves } = props;
  return (
    <div className="book">
      <BookInterface
        coverURL={book.imageLinks.thumbnail}
        bookShelves={bookShelves}
      />
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

export default Book;
