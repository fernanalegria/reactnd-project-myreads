import React from 'react';
import BookShelf from './BookShelf';

const ListShelves = props => {
  const booksByShelf = {};
  for (let shelf of props.bookShelves) {
    booksByShelf[shelf.value] = [];
  }
  for (let book of props.books) {
    booksByShelf[book.shelf].push(book);
  }

  return (
    <div className="list-books-content">
      <div>
        {props.bookShelves.map((shelf, index, array) => (
          <BookShelf
            key={shelf.value}
            activeShelf={shelf}
            bookShelves={array}
            books={booksByShelf[shelf.value]}
          />
        ))}
      </div>
    </div>
  );
};

export default ListShelves;
