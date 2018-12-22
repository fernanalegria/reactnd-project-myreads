import React, { Component } from 'react';

class BookShelfChanger extends Component {
  state = {
    value: this.props.bookShelves.find(shelf => shelf.active).value
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    const { bookShelves } = this.props;
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="move" disabled>
            Move to...
          </option>
          {bookShelves.map(shelf => (
            <option key={shelf.value} value={shelf.value}>{shelf.title}</option>
          ))}
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookShelfChanger;
