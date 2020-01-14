import React from "react";

const SearchContainer = ({
  onSearchPerformed,
  onSearchUpdated,
  searchTerm
}) => {
  return (
    //SEARCH BOX
    //SEARCH BAR
    <div className="w-1/2 bg-white border overflow-hidden rounded-lg h-auto px-10 py-2">
      <h4 className="font-semibold text-3xl leading-tight py-5">
        Search for Ingredients and keywords to find recipes
      </h4>
      <form onSubmit={onSearchPerformed} className="search-form py-5">
        <input
          className="border w-full h-12 mb-8"
          type="text"
          value={searchTerm}
          onChange={onSearchUpdated}
        />
        <button
          className="w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>

    //PILLS
  );
};

export default SearchContainer;
