import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/recipeDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    <div className="flex direction-column justify-center items-center h-screen">
      <div className="w-96 p-6 rounded-lg shadow-md bg-white text-center">
        <div className="mb-6">
          <h1 className="text-4xl font-semibold"> Recipe List </h1>
          <RecipeList />
          <AddRecipeForm />
        </div>
      </div>
    </div>
  );
}

export default App;