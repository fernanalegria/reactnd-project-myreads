import React from 'react';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';

/**
 * List of shelves where the user can classify books
 */
const ListShelves = props => {
  const { bookShelves, books, onMove } = props;
  const booksByShelf = {};
  for (let shelf of bookShelves) {
    booksByShelf[shelf.value] = [];
  }
  for (let book of books) {
    booksByShelf[book.shelf].push(book);
  }

  return (
    <div className="list-books-content">
      <div>
        {bookShelves.map((shelf, index, array) => (
          <BookShelf
            key={shelf.value}
            title={shelf.title}
            bookShelves={array}
            books={booksByShelf[shelf.value]}
            onMove={onMove}
          />
        ))}
      </div>
    </div>
  );
};

ListShelves.propTypes = {
  /** Array of the existing shelves to classify books */
  bookShelves: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  /** Array of book objects,
   * with all the necessary info to display and move them from one shelf to another 
   */
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string),
      imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string
      }),
      id: PropTypes.string.isRequired,
      shelf: PropTypes.string.isRequired
    })
  ).isRequired,
  /** Function to move books from one shelf to another */
  onMove: PropTypes.func.isRequired
};

export default ListShelves;
