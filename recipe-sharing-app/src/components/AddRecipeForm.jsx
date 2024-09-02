import { useState } from 'react';
  import useRecipeStore from './recipeStore';

  const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      addRecipe({ id: Date.now(), title, description });
      setTitle('');
      setDescription('');
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
        type="submit">Add Recipe
        </button>
        </div>
      </form>
    );
  };

  export default AddRecipeForm;