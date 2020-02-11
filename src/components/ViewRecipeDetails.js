import React from "react";

const ViewRecipeDetails = ({ selectedRecipe, onGoBackToRecipesList }) => {
  return (
    <div class="mt-4 bg-white px-10 py-6 rounded-lg">
      <div className="max-w-sm w-full">
        <button
          className="text-red-700 hover:text-red-500 font-semibold text-md cursor-pointer hover:underline"
          onClick={onGoBackToRecipesList}
        >
          Back
        </button>
      </div>
      <div className="max-w-sm w-full lg:max-w-full lg:flex mt-10">
        <img
          className="w-64 h-64 rounded-full mr-8"
          src={selectedRecipe.recipe.image}
          alt=""
        />
        <div className="flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <h3 className="text-gray-900 text-xl uppercase font-semibold tracking-wide sm:mt-6">
              {selectedRecipe.recipe.label}
            </h3>
            {selectedRecipe.recipe.totalTime > 0 ? (
              <h4 className="text-gray-700">
                {selectedRecipe.recipe.totalTime} minutes
              </h4>
            ) : null}

            <ol className="mt-6">
              {selectedRecipe.recipe.ingredients.map(ingredient => (
                <li className="list-none text-gray-700">{ingredient.text}</li>
              ))}
            </ol>
            <button
              className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-10"
              onClick={() => (window.location.href = selectedRecipe.recipe.url)}
            >
              Method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRecipeDetails;
