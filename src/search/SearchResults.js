import React from 'react';
import Book from '../common/Book';
import PropTypes from 'prop-types';

/**
 * Grid to display the result of querying the book database
 */
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

export default SearchResults;
