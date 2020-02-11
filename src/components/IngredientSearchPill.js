import React from "react";

const IngredientSearchPill = ({ ingredient, removeIngredient }) => {
  return (
    <button
      class="inline-block text-sm px-4 py-2 border-4 font-bold rounded-full text-white border-white mt-4 mr-4 cursor-pointer"
      onClick={() => removeIngredient(ingredient)}
    >
      {ingredient}
    </button>
  );
};

export default IngredientSearchPill;
