import React from "react";

const SearchContainer = ({
  onSearchPerformed,
  onSearchUpdated,
  searchTerm
}) => {
  return (
    <form onSubmit={onSearchPerformed} className="search-form">
      <input
        className="search-bar"
        type="text"
        value={searchTerm}
        onChange={onSearchUpdated}
      />
      <button className="search-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default SearchContainer;
