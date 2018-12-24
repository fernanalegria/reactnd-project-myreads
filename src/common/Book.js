import React, { Component } from 'react';
import BookInterface from './BookInterface';
import PropTypes from 'prop-types';

/**
 * Book entity, which contains its cover, title and authors and the classification picker
 */
class Book extends Component {
  static propTypes = {
    /** Book object with all the necessary info about it */
    book: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string),
      imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string
      }),
      id: PropTypes.string.isRequired,
      shelf: PropTypes.string.isRequired
    }).isRequired,
    /** Array of the existing shelves to classify books */
    bookShelves: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    ).isRequired
  };

  /**
   * Calls the callback function onMove with the incoming origin and target shelves and adds the book id
   * @param  {string} origin
   * @param  {string} target
   */
  onMove = (origin, target) => {
    this.props.onMove(this.props.book.id, origin, target);
  };

  render() {
    const { book, bookShelves } = this.props;
    return (
      <div className="book">
        <BookInterface
          book={book}
          bookShelves={bookShelves}
          onMove={this.onMove}
        />
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors.join(', ') : 'Unknown'}
        </div>
      </div>
    );
  }
}

export default Book;
