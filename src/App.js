import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
import ViewRecipeDetails from "./components/ViewRecipeDetails";

const App = () => {
  const APP_ID = "e74fe7a6";
  const API_KEY = "8c5d31e7816e4c8b54e498f9ac5b7377";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [queryString, setQueryString] = useState("chicken");

  const [isViewDetailsDisplayed, setDisplayViewDetails] = useState(false);

  const viewRecipeDetailsClicked = () => {
    setDisplayViewDetails(true);
  };

  const backToRecipeListClicked = () => {
    setDisplayViewDetails(false);
  };

  //only get recipes if queryString changes
  useEffect(() => {
    getRecipes();
  }, [queryString]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${queryString}&app_id=${APP_ID}&app_key=${API_KEY}`
    );

    const recipeData = await response.json();
    setRecipes(recipeData.hits);
  };

  const updateSearch = event => {
    setSearch(event.target.value);
  };

  const performSearch = event => {
    event.preventDefault();
    setQueryString(search);
    setSearch("");
  };

  return (
    <div className="App antialiased text-gray-900">
      <Navbar></Navbar>
      <div className="container">
        <form onSubmit={performSearch} className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-button" type="submit">
            Submit
          </button>
          {isViewDetailsDisplayed ? (
            <ViewRecipeDetails
              onGoBackToRecipesList={backToRecipeListClicked}
            ></ViewRecipeDetails>
          ) : (
            <RecipeList
              onViewRecipeDetailsClicked={viewRecipeDetailsClicked}
              recipes={recipes}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default App;
