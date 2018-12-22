import React from 'react';
import BookCover from './BookCover';
import BookShelfChanger from './BookShelfChanger';

const BookInterface = props => {
  const { coverURL, bookShelves } = props;
  return (
    <div className="book-top">
      <BookCover coverURL={coverURL} />
      <BookShelfChanger bookShelves={bookShelves} />
    </div>
  );
};

export default BookInterface;
