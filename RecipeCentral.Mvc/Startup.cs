using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Recipe.Central.Startup))]
namespace Recipe.Central
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
        }
    }
}
