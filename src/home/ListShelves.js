import React from 'react';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';

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
  bookShelves: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
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
  onMove: PropTypes.func.isRequired
};

export default ListShelves;
