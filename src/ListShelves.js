import React from 'react';
import BookShelf from './BookShelf';

const ListShelves = props => (
  <div className="list-books-content">
    <div>
      {props.bookShelves.map((shelf, index, array) => (
        <BookShelf key={shelf.value} activeShelf={shelf} bookShelves={array} />
      ))}
    </div>
  </div>
);

export default ListShelves;
