import React from 'react';
import Header from './Header';
import ListShelves from './ListShelves';
import AddButton from '../common/AddButton';
import PropTypes from 'prop-types';

/**
 * Main page
 */
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

export default Home;
