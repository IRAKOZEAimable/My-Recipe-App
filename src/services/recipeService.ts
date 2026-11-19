import type { Recipe } from "../types/recipe";
import { initailRecipes } from "../data/recipes";

// Simulate fetching recipes from a backend API
export const fetchRecipes = async(): Promise<Recipe[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(initailRecipes);
        }, 1000);
    });
};