import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Picker to change add, remove or change books from one shelf to another
 */
class BookShelfChanger extends Component {
  static propTypes = {
    /** Array of the existing shelves to classify books */
    bookShelves: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    ).isRequired,
    /** Bookshelf value */
    shelf: PropTypes.string.isRequired,
    /** Function to add book id */
    onMove: PropTypes.func.isRequired
  };

  state = {
    value: this.props.shelf
  };

  /**
   * Updates the component's state and calls onMove with the origin and target shelves.
   * @param {Event} event onChange event
   */
  handleChange = event => {
    const prevValue = this.state.value;
    this.setState(
      {
        value: event.target.value
      },
      () => {
        this.props.onMove(prevValue, this.state.value);
      }
    );
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="move" disabled>
            Move to...
          </option>
          {this.props.bookShelves.map(shelf => (
            <option key={shelf.value} value={shelf.value}>
              {shelf.title}
            </option>
          ))}
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookShelfChanger;
