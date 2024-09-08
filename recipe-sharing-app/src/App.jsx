import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';


const App = () => {
 
  return (
    <Router>
      <div className="flex direction-column justify-center items-center h-screen">
        <div className="w-96 p-6 rounded-lg shadow-md bg-white text-center">
          <div className="mb-6">
            <nav>
              <ul>
                <li><Link to="/">List of recipes</Link></li>
                <li><Link to="/add-recipe">Add recipe</Link></li>
              </ul>
            </nav>
            <h1 className="text-4xl font-semibold"> Recipe List </h1>
            <Routes>
              <Route path="/" element={
                <>
                  <RecipeList /> 
                  {/* <AddRecipeForm /> */}
                </>
              } />
              <Route path="/add-recipe" element={<AddRecipeForm />} />
              <Route path="/recipe/:id" element={<RecipeDetails />} />
            </Routes>
            <FavoritesList />
            <RecommendationsList />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;