import useRecipeStore from './recipeStore';

const DeleteRecipeButton = (props) => {
  return (
    <>
    <button
    className="px-2 py-1 bg-red-500 text-white font-semibold rounded-md"
    onClick={props.handleDelete}
  >
    Delete
  </button>
    </>
  )
}

export default DeleteRecipeButton;