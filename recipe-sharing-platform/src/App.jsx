import { useState, useEffect } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import RecipeList from "./components/RecipeList";

function App() {
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data.json');
        const data = await response.json();
        setRecipeData(JSON.parse(data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <HomePage />
        <RecipeList recipe={recipeData} />
      </div>
    </>
  );
}

export default App;