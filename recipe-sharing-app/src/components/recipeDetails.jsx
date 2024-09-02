import { useParams } from 'react-router-dom';
import useRecipeStore from '.recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipes } = useRecipeStore();
  
  const recipe = recipes.find(recipe => recipe.id === parseInt(id));

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{recipe.name}</h2>
      <p className="text-gray-700 mb-2"><strong>Ingredients:</strong></p>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p className="text-gray-700"><strong>Instructions:</strong></p>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;