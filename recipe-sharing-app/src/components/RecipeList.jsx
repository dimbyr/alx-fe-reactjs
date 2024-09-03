import { useState } from 'react';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  
  // State to track which recipe is being edited
  const [editingRecipeId, setEditingRecipeId] = useState(null);

  const handleDelete = (id) => {
    deleteRecipe(id);
  };

  const handleEdit = (id) => {
    setEditingRecipeId(id);
  };

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <h3 className='font-bold text-2xl'>{recipe.title}</h3>
          <p>{recipe.description}</p>
          
          <button
            className="px-2 py-1 bg-red-500 text-white font-semibold rounded-md"
            onClick={() => handleDelete(recipe.id)}
          >
            Delete
          </button>

          <button
            className="px-2 py-1 bg-blue-500 text-white font-semibold rounded-md"
            onClick={() => handleEdit(recipe.id)}
          >
            Edit
          </button>

          {/* Conditionally render the EditRecipeForm if this recipe is being edited */}
          {editingRecipeId === recipe.id && (
            <EditRecipeForm recipe={recipe} onClose = {()=> setEditingRecipeId(null)} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;