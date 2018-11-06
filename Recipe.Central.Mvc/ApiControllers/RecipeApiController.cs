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
    }
}
