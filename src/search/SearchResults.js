import React from 'react';
import Book from '../common/Book';
import PropTypes from 'prop-types';

const SearchResults = props => {
  const { books, bookShelves, onMove } = props;
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <Book book={book} bookShelves={bookShelves} onMove={onMove} />
          </li>
        ))}
      </ol>
    </div>
  );
};

SearchResults.propTypes = {
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

export default SearchResults;
