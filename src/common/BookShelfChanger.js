import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends Component {
  static propTypes = {
    bookShelves: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    ).isRequired,
    shelf: PropTypes.string.isRequired,
    onMove: PropTypes.func.isRequired
  };

  state = {
    value: this.props.shelf
  };

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
