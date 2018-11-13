using Recipe.Central.Models.Recipe;
using Recipe.Central.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Recipe.Central.ApiControllers
{
    public class RecipeController : ApiController
    {
        private readonly IRecipeService _recipeService;
        public RecipeController(IRecipeService recipeService)
        {
            _recipeService = recipeService;
        }
        
        public IHttpActionResult GetAll()
        {
            var recipes = _recipeService.GetRecipies();
            return Ok(recipes);
        }

        public IHttpActionResult Get(int id)
        {
            var recipe = _recipeService.GetRecipe(id);
            return Ok(recipe);
        }

        public IHttpActionResult Post([FromBody] RecipeDetails recipe)
        {
            recipe = _recipeService.AddRecipe(recipe);
            return Ok(recipe);
        }

        public IHttpActionResult Put(int id, [FromBody] RecipeDetails recipe)
        {
            recipe = _recipeService.UpdateRecipe(recipe);
            return Ok(recipe);
        }
    }
}
