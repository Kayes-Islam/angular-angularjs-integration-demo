using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Recipe.Central.Controllers;
using Recipe.Central.Infrastructure;
using Recipe.Central.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Mvc;
using Unity;

namespace Recipe.Central
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            UnityContainer container = new UnityContainer();
            container.RegisterType<IRecipeService, RecipeService>();
            container.RegisterType<IController, AdminController>("admin");

            UnityControllerFactory factory = new UnityControllerFactory(container);

            ControllerBuilder.Current.SetControllerFactory(factory);
            config.DependencyResolver = new UnityResolver(container);

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            JsonConvert.DefaultSettings = () => new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };
        }
    }
}
