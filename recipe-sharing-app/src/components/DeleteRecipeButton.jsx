import useRecipeStore from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = (props) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const handleDelete = (id) => {
    deleteRecipe(id);
  };
  return (
    <>
    <button
    className="px-2 py-1 bg-red-500 text-white font-semibold rounded-md"
    onClick={()=> handleDelete(props.recipeId)}
  >
    Delete
  </button>
    </>
  )
}

export default DeleteRecipeButton;