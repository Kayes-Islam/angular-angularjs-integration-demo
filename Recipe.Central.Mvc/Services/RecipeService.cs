using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Recipe.Central.Models.Recipe;

namespace Recipe.Central.Services
{
    public class RecipeService : IRecipeService
    {
        private List<RecipeInfo> _recipes;

        public RecipeService()
        {
            _recipes = new List<RecipeInfo>()
            {
                new RecipeInfo
                {
                    Id = Guid.NewGuid(),
                    Name = "A"
                },
                new RecipeInfo
                {
                    Id = Guid.NewGuid(),
                    Name = "B"
                }
            };
        }

        public List<RecipeInfo> GetRecipies()
        {
            return _recipes;
        }
    }
}