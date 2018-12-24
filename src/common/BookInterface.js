import React from 'react';
import BookCover from './BookCover';
import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types';

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

BookInterface.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string),
    imageLinks: PropTypes.shape({
      smallThumbnail: PropTypes.string
    }),
    id: PropTypes.string,
    shelf: PropTypes.string.isRequired
  }).isRequired,
  bookShelves: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  onMove: PropTypes.func.isRequired
};

export default BookInterface;
