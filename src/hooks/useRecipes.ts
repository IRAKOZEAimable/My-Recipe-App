import { useState, useEffect } from "react";
import type { Recipe, NewRecipe } from "../types/recipe";
import { fetchRecipes } from "../services/recipeService";

const useRecipes = () => {

    // 1. store recipes
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    // 2. track loading
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // 3. track errors
    const [error, setError] = useState<string | null>(null);
    
    // 4. fetch recipes when hook is first used
    useEffect(() => {
        const loadRecipes = async () => {
            try {
                setIsLoading(true);

                const data = await fetchRecipes();

                setRecipes(data);
                setError(null);
            } catch {
                setError("Failed to load recipes.");
            } finally {
                setIsLoading(false);
            }
        }

        loadRecipes();

    }, [])

    // 5. Add new recipe
    const addRecipe = (newRecipe: NewRecipe) => {
        const recipeWithId: Recipe = {
            ...newRecipe,
            id: Date.now(),
        };

        setRecipes((previousRecipes) => [
            ...previousRecipes,
            recipeWithId,
        ]);
    }; 

     // 6. Return everything needed by components
     return {recipes, isLoading, error, addRecipe};
}

export default useRecipes;

   

    