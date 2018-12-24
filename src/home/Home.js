import React from 'react';
import Header from './Header';
import ListShelves from './ListShelves';
import AddButton from '../common/AddButton';
import PropTypes from 'prop-types';

const Home = props => {
  const { bookShelves, books, onMove } = props;
  return (
    <div className={`list-books ${books.length === 0 ? 'empty-results' : ''}`}>
      <Header />
      <ListShelves bookShelves={bookShelves} books={books} onMove={onMove} />
      <AddButton />
    </div>
  );
};

Home.propTypes = {
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

export default Home;
