import React, { useState } from "react";
import IngredientSearchPill from "./IngredientSearchPill";
import pizzabackground from "../assets/pizzabackground.jpg";

const SearchContainer = ({
  onSearchPerformed,
  onSearchUpdated,
  searchTerm
}) => {
  const [ingredientsList, setIngredientsList] = useState(["chicken"]);

  return (
    <div className="flex">
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
            onKeyPress={event => {
              if (event.key === "Enter") {
                setIngredientsList(ingredientsList.concat(searchTerm));
              }
            }}
          />
          <button
            className="w-full bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div className="w-1/2 px-10">
        {ingredientsList.map((ingredient, index) => (
          <IngredientSearchPill key={index} ingredient={ingredient} />
        ))}
      </div>
    </div>
  );
};

export default SearchContainer;
