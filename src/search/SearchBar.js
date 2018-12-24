import React from 'react';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';
import PropTypes from 'prop-types';

const SearchBar = props => {
  const { search } = props;
  return (
    <div className="search-books-bar">
      <Link to="/" className="close-search">
        Close
      </Link>
      <SearchInput search={search} />
    </div>
  );
};

SearchBar.propTypes = {
  search: PropTypes.func.isRequired
};

export default SearchBar;
