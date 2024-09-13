import React from "react";
function RecipeList({ recipe }) {
  return (
    <div>
      {recipe.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <img src={item.image} alt={item.name} />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;