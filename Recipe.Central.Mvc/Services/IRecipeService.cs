using Recipe.Central.Models.Recipe;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Recipe.Central.Services
{
    public interface IRecipeService
    {
        List<RecipeInfo> GetRecipies();
    }
}