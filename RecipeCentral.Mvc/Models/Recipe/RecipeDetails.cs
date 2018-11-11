using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Recipe.Central.Models.Recipe
{
    public class RecipeDetails
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<string> Ingredients { get; set; } = new List<string>();

        public List<string> Steps { get; set; } = new List<string>();
    }
}