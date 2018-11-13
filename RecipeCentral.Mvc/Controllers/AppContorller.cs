using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Recipe.Central.Controllers
{
    public class AppContorller: Controller
    {
        public ActionResult Index(string pathInfo)
        {
            return View();
        }
    }
}