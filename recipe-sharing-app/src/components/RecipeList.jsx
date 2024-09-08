import { useState } from 'react';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import RecipeDetails from './RecipeDetails';
import DeleteRecipeButton from './DeleteRecipeButton';
import { Link } from 'react-router-dom';

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
          <RecipeDetails />
          <DeleteRecipeButton recipeId = {recipe.id}/>

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

          {/* <Link to={`/recipes/${recipe.id}`}>
            <button
              className="px-2 py-1 bg-green-500 text-white font-semibold rounded-md"
            >
              View Details
            </button>
          </Link> */}

          {/* Render RecipeDetails within the Link target, passing recipe ID as a prop */}
          <Link to={`/recipes/${recipe.id}`}>
            <RecipeDetails recipeId={recipe.id} /> {/* Pass recipe ID */}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;