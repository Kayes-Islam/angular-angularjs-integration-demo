using Recipe.Central.Models.Recipe;
using Recipe.Central.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Recipe.Central.Controllers
{
    public class AdminController : Controller
    {
        private readonly IRecipeService _recipeService;
        public AdminController(IRecipeService recipeService)
        {
            _recipeService = recipeService;
        }

        public ActionResult Index()
        {
            var recipes = _recipeService.GetRecipies();
            return View(recipes);
        }

        public ActionResult Edit(int id)
        {
            var recipe = _recipeService.GetRecipe(id);
            return View(recipe);
        }

        [HttpPost]
        public ActionResult Edit(RecipeDetails recipe)
        {
            recipe = _recipeService.UpdateRecipe(recipe);
            return RedirectToAction("Index");
        }
    }
}