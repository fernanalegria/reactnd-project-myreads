import React from 'react';
import Book from '../common/Book';

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

export default SearchResults;
