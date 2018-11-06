﻿using Recipe.Central.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Recipe.Central.Controllers
{
    public class HomeController : Controller
    {
        private readonly IRecipeService _recipeService;
        public HomeController(IRecipeService recipeService)
        {
            _recipeService = recipeService;
        }

        public ActionResult Index()
        {
            var recipes = _recipeService.GetRecipies();
            return View(recipes);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}