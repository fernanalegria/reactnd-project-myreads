import React from 'react';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

const SearchBar = () => (
  <div className="search-books-bar">
    <Link to="/" className="close-search">
      Close
    </Link>
    <SearchInput />
  </div>
);

export default SearchBar;
