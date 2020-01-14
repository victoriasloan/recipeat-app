import React from "react";
const RecipeCard = ({ title, calories, image, ingredients }) => {
  return (
    <div className="w-screen md:w-1/3 px-2 py-2">
      <div className="bg-white border overflow-hidden rounded-lg">
        <img className="object-cover h-64 w-full" src={image} alt="" />
        <div className="p-6">
          <h4 className="font-semibold text-lg">{title}</h4>
          <div className="text-gray-600 text-xs uppercase font-semibold tracking-wide pb-5">
            Low Carb &bull; High Protein
          </div>

          <h5 className="text-teal-600 font-semibold text-sm">View Recipe</h5>
          {/* <ol>
            {ingredients.map(ingredient => (
              <li className="list-disc text-gray-800">{ingredient.text}</li>
            ))}
          </ol> */}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
