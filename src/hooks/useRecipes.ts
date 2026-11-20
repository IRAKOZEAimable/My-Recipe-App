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

}