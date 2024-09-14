import { useState, useEffect } from "react";
import recipeData from "../data.json";

function HomePage(){
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    // Since we're importing the data, no need to fetch. Set the state directly.
    setRecipe(recipeData);
  }, []);

  return(
    <>
    <h1 className="text-3xl font-bold mb-2">Home Page</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {recipe.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
          <img src={item.image} alt={item.name}             className= "w-full h-48 object-cover"
 />
          <h2  className="text-xl font-semibold mb-2">{item.title}</h2>
          <p>{item.summary}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default HomePage;