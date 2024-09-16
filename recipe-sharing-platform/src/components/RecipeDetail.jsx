import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRecipeStore from '../stores/recipeStore'; // Import Zustand store

function RecipeDetail() {
  const path = "data.json";
  const { id } = useParams();
  const { recipeData, loading, error, fetchRecipes } = useRecipeStore();

  // Fetch recipes if they are not loaded
  useEffect(() => {
    if (recipeData.length === 0) {
      fetchRecipes();
    }
  }, [recipeData, fetchRecipes]);

  if (loading) {
    return <p>Loading recipe details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Find the selected recipe by ID
  const selectedRecipe = recipeData.find((recipe) => recipe.id === parseInt(id));

  if (!selectedRecipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{selectedRecipe.title}</h1>
      <img src={selectedRecipe.image} alt={selectedRecipe.title} className="w-full h-auto mb-4 rounded-lg shadow-md" />
      <div>
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-4">
          {selectedRecipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <p className="text-gray-700 mb-4">{selectedRecipe.instructions}</p>
        <h2 className="text-xl font-semibold text-green-600">Bon Appétit!</h2>
      </div>
    </div>
  );
}

export default RecipeDetail;
