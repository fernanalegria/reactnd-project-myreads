import React from 'react';
import BookCover from './BookCover';
import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types';

/**
 * Contains the book cover and the picker that lets the user classify the book
 */
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
  /** Book object with all the necessary info about it */
  book: PropTypes.shape({
    title: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string),
    imageLinks: PropTypes.shape({
      smallThumbnail: PropTypes.string
    }),
    id: PropTypes.string,
    shelf: PropTypes.string.isRequired
  }).isRequired,
  /** Array of the existing shelves to classify books */
  bookShelves: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  /** Function to add book id */
  onMove: PropTypes.func.isRequired
};

export default BookInterface;
