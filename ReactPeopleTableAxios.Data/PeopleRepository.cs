using System.Collections.Generic;
using System.Linq;
using System.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace ReactPeopleTableAxios.Data
{
    public class PeopleRepository
    {
        private readonly string _connectionString;
        public PeopleRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Person> GetAllPeople()
        {
            PeopleContext pc = new PeopleContext(_connectionString);
            return pc.people.ToList();
        }
    }
}
