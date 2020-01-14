import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, onViewRecipeDetailsClicked }) => {
  return (
    <div className="flex -mx-2 mb-8 flex-wrap">
      {recipes.map(recipe => (
        <RecipeCard
          onViewRecipeDetailsClicked={() => onViewRecipeDetailsClicked(recipe)}
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default RecipeList;
