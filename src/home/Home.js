import React from 'react';
import Header from './Header';
import ListShelves from './ListShelves';
import AddButton from '../common/AddButton';

const Home = props => {
    const {bookShelves, books, onMove} = props;
    return (
        <div className="list-books">
        <Header />
        <ListShelves
          bookShelves={bookShelves}
          books={books}
          onMove={onMove}
        />
        <AddButton />
      </div>
    );
};

export default Home;
