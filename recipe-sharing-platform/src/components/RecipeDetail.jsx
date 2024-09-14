import { useState, useEffect } from "react";

function RecipeDetail(props){
  const [selectedRecipe, setSelectedRecipe] = useState('')
  useEffect(() => {
    const recipe = props.recipe.find((rcp) => rcp.id === props.id); // Use find instead of filter
    setSelectedRecipe(recipe);
  }, [props.recipe, props.id]); // Only run when props.recipe or props.id change

  if (!selectedRecipe) {
    return <p>Loading recipe details...</p>; // Handle loading or no recipe found
  }
  return (
    <>
    <div>
    <h1>{selectedRecipe.title}</h1>
    <div>
      <img src={`${selectedRecipe.image}`} alt="" />
      <h2>Ingredients</h2>
      <p>{selectedRecipe.details.ingredients}</p>
      <h2>Instruction</h2>
      <p>{selectedRecipe.details.instruction}</p>
      <h2>Bon appetit!! </h2>
    </div>
    </div>
    </>
  )
}

export default RecipeDetail;