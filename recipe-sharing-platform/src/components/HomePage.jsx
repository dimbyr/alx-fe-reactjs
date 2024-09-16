import { useState, useEffect } from "react";
import recipeData from "../../public/data.json";
import RecipeDetail from './RecipeDetail';
import { Link } from "react-router-dom";
import useRecipeStore from '../stores/recipeStore'; // Import Zustand store

function HomePage() {
  const { recipeData, loading, error, fetchRecipes } = useRecipeStore();

  // Fetch recipes when the component mounts
  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  if (loading) {
    return <p>Loading recipes...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return(
    <>
    <h1 className="text-3xl font-bold mb-2">Home Page</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {recipeData.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
          <img src={item.image} alt={item.name}             className= "w-full h-48 object-cover"
 />
          <h2  className="text-xl font-semibold mb-2">{item.title}</h2>
          <p>{item.summary}</p>
          <Link to={`/recipe/${item.id}`} className="text-blue-500 hover:underline">
                View Details
          </Link>
        </div>
      ))}
    </div>
    </>
  );
}

export default HomePage;