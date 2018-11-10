using System;
using System.Collections.Generic;
using Recipe.Central.Models.Recipe;

namespace Recipe.Central.Services
{
    public interface IRecipeService
    {
        RecipeDetails AddRecipe(RecipeDetails recipeDetails);
        void DeleteRecipe(int recipeId);
        RecipeDetails GetRecipe(int id);
        List<RecipeInfo> GetRecipies();
        RecipeDetails UpdateRecipe(RecipeDetails recipeDetails);
    }
}