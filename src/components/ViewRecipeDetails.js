import React from "react";

const ViewRecipeDetails = ({ onGoBackToRecipesList }) => {
  return (
    <div className="flex -mx-2 mb-8 flex-wrap">
      <button onClick={onGoBackToRecipesList}>Go back</button>
      View Details
    </div>
  );
};

export default ViewRecipeDetails;
