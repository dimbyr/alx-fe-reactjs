import { useState } from 'react';
  import useRecipeStore from './recipeStore';

  const EditRecipeForm = ({ recipe, onClose }) => {
    const updateRecipe = useRecipeStore(state => state.updateRecipe);
    const [title, setTitle] = useState(recipe?.title || '');
    const [description, setDescription] = useState(recipe?.description || '');

    const handleSubmit = (event) => {
      event.preventDefault();
      updateRecipe({...recipe, title, description });
      onClose();
    };

    return (
      <form className="flex-col justify-center items-center h-auto"
      onSubmit={handleSubmit}>
        <input required className="p-2 mr-1 w-60 border rounded-md border-gray-600"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <br />
        <textarea required className="p-2 mr-2 w-60 border rounded-md border-gray-600"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <div>
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md"
        type="submit">Save changes
        </button>
        </div>
      </form>
    );
  };

  export default EditRecipeForm;