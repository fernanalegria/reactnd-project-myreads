import React from 'react';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';
import PropTypes from 'prop-types';
import { rootUrl } from '../index';

/**
 * Search bar containing the search field, and also a back button that redirects to the main page
 */
const SearchBar = props => {
  const { search } = props;
  return (
    <div className="search-books-bar">
      <Link to={rootUrl} className="close-search">
        Close
      </Link>
      <SearchInput search={search} />
    </div>
  );
};

SearchBar.propTypes = {
  /** Function to query results from the API */
  search: PropTypes.func.isRequired
};

export default SearchBar;
