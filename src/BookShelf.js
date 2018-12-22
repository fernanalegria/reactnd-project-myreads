import React from 'react';
import Book from './Book';

const BookShelf = props => {
  const { activeShelf, bookShelves, books } = props;
  const compactShelves = bookShelves.slice(0);
  compactShelves.forEach(shelf => {
      shelf.active = shelf.value === activeShelf.value;
  });

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{activeShelf.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <Book book={book} bookShelves={compactShelves} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
