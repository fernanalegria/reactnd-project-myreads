import React from 'react';
import Book from '../common/Book';
import PropTypes from 'prop-types';

/**
 * Shelf containing books from a specific category
 */
const BookShelf = props => {
  const { title, bookShelves, books, onMove } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <Book book={book} bookShelves={bookShelves} onMove={onMove} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  /** Bookshelf title */
  title: PropTypes.string.isRequired,
  /** Array of the existing shelves to classify books */
  bookShelves: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  /** Array of book objects from a specific shelf,
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

export default BookShelf;
