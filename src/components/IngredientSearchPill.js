import React from "react";

const IngredientSearchPill = ({ ingredient }) => {
  return (
    <button class="inline-block text-sm px-4 py-2 border rounded-full text-white border-white mt-4 mr-4">
      {ingredient}
    </button>
  );
};

export default IngredientSearchPill;
