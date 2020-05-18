using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactPeopleTableAxios.Data;

namespace ReactPeopleTableAxios.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private string _connectionString;
        public PeopleController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("GetAll")]
        public List<Person> GetAllPeople()
        {
            PeopleRepository pr = new PeopleRepository(_connectionString);
            return pr.GetAllPeople();
        }
    }
}