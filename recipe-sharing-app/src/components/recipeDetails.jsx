// import { useRecipeStore } from './recipeStore';

//   const RecipeDetails = ({ recipeId }) => {
//     const recipe = useRecipeStore(state =>
//       state.recipes.find(recipe => recipe.id === recipeId)
//     );
//     return (
//       <div>
//         <h1>Name: {recipe.title}</h1>
//         <p>Description: {recipe.description}</p>
//       </div>
//     );
//   };

//   export default RecipeDetails;

import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const recipes = useRecipeStore(state => state.recipes);
  const recipe = recipes.find(recipe => recipe.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <p className="text-lg mb-4">{recipe.description}</p>
      {/* Add more details about the recipe here */}
    </div>
  );
};

export default RecipeDetails;