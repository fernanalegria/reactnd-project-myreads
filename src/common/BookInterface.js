import React from 'react';
import BookCover from './BookCover';
import BookShelfChanger from './BookShelfChanger';

const BookInterface = props => {
  const { book, bookShelves, onMove } = props;
  return (
    <div className="book-top">
      <BookCover
        coverURL={book.imageLinks ? book.imageLinks.smallThumbnail : ''}
      />
      <BookShelfChanger
        bookShelves={bookShelves}
        shelf={book.shelf}
        onMove={onMove}
      />
    </div>
  );
};

export default BookInterface;
