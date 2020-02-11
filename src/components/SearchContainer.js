import React, { useState } from "react";
import IngredientSearchPill from "./IngredientSearchPill";
import pizzabackground from "../assets/pizzabackground.jpg";

const SearchContainer = ({
  onSearchPerformed,
  onSearchUpdated,
  searchTerm,
  clearSearch
}) => {
  const [ingredientsList, setIngredientsList] = useState([]);

  const removeIngredient = ingredient => {
    setIngredientsList(ingredientsList.filter(item => item !== ingredient));
  };

  return (
    <div className="md:flex">
      <div className="w-full md:w-1/2 bg-white border overflow-hidden rounded-lg h-auto px-8 py-2">
        <h4 className="font-semibold text-2xl leading-tight py-5">
          Search for Ingredients and keywords to find recipes
        </h4>
        <div className="search-form py-5">
          <div class="flex items-center border-b border-b-2 border-gray-500 py-2">
            <input
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Chicken"
              aria-label="Ingredient"
              value={searchTerm}
              onChange={onSearchUpdated}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  setIngredientsList(ingredientsList.concat(searchTerm));
                  clearSearch();
                }
              }}
            />
            <button
              class="flex-shrink-0 bg-red-700 hover:bg-red-500 border-red-700 hover:border-red-500 text-sm border-4 text-white py-1 px-2 rounded cursor-pointer font-bold"
              type="button"
              onClick={() =>
                setIngredientsList(ingredientsList.concat(searchTerm))
              }
            >
              Add Ingredient
            </button>
          </div>

          <button
            className="w-full bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg mt-8"
            onClick={() => onSearchPerformed(ingredientsList)}
          >
            Search
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:px-10">
        {ingredientsList.map((ingredient, index) => (
          <IngredientSearchPill
            key={index}
            ingredient={ingredient}
            removeIngredient={() => removeIngredient(ingredient)}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchContainer;
