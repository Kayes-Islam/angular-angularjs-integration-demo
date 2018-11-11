using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Hosting;
using Newtonsoft.Json;
using Recipe.Central.Models.Recipe;

namespace Recipe.Central.Services
{
    public class RecipeService : IRecipeService
    {
        private static List<RecipeDetails> _recipes;

        static RecipeService()
        {
            _recipes = new List<RecipeDetails>()
            {
                new RecipeDetails
                {
                    Id = 1,
                    Name = "A"
                },
                new RecipeDetails
                {
                    Id = 2,
                    Name = "B"
                }
            };

            _recipes = JsonConvert.DeserializeObject<List<RecipeDetails>>(
                File.ReadAllText(
                    HostingEnvironment.MapPath(@"~/App_Data/recipes.json")
                )
            );
        }

        public List<RecipeInfo> GetRecipies()
        {
            return _recipes
                .Select(r => new RecipeInfo
                {
                    Id = r.Id,
                    Name = r.Name
                })
                .ToList();
        }

        public RecipeDetails GetRecipe(int id)
        {
            return _recipes.Single(r => r.Id == id);
        }

        public RecipeDetails AddRecipe(RecipeDetails recipeDetails)
        {
            recipeDetails.Id = _recipes
                .Select(r => r.Id)
                .DefaultIfEmpty(0)
                .Max() + 1;

            _recipes.Add(recipeDetails);

            return recipeDetails;
        }

        public RecipeDetails UpdateRecipe(RecipeDetails recipeDetails)
        {
            var existing = _recipes.Single(r => r.Id == recipeDetails.Id);
            var index = _recipes.IndexOf(existing);
            _recipes[index] = recipeDetails;

            return recipeDetails;
        }

        public void DeleteRecipe(int recipeId)
        {
            var recipe = _recipes.FirstOrDefault(r => r.Id == recipeId);
            if (recipe != null)
                _recipes.Remove(recipe);
        }
    }
}