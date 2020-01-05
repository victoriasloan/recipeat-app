import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
const App = () => {
  const APP_ID = "e74fe7a6";
  const API_KEY = "8c5d31e7816e4c8b54e498f9ac5b7377";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`
    );

    const recipeData = await response.json();

    console.log(recipeData, "recipe data");
    setRecipes(recipeData.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Submit
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe />
      ))}
    </div>
  );
};

export default App;
