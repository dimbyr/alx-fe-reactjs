// src/useRecipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipeData: [],
  loading: true,
  error: null,

  // Action to fetch recipes
  fetchRecipes: async () => {
    try {
      const response = await fetch('/data.json');
      if (!response.ok) {
        throw new Error("Failed to fetch recipe data");
      }
      const data = await response.json();
      set({ recipeData: data, loading: false, error: null });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default useRecipeStore;
