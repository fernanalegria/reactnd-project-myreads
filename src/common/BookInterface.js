import React from 'react';
import BookCover from './BookCover';
import BookShelfChanger from './BookShelfChanger';

const BookInterface = props => {
  const { coverURL, bookShelves, onMove } = props;
  return (
    <div className="book-top">
      <BookCover coverURL={coverURL} />
      <BookShelfChanger bookShelves={bookShelves} onMove={onMove} />
    </div>
  );
};

export default BookInterface;
