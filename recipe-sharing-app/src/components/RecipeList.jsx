import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const editRecipe = useRecipeStore(state => state.editRecipe);

  return (
    <ul>
      {recipes.map(recipe => (
        <li key={recipe.id}>
          <h3 className='font-bold text-2xl'>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button className="px-2 py-1 bg-red-500 text-white font-semibold rounded-md"
          onClick={deleteRecipe}>Delete</button>
          <button className="px-2 py-1 bg-blue-500 text-white font-semibold rounded-md"
           onClick={editRecipe}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
