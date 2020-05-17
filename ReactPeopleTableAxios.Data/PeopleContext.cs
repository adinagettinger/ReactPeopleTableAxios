using Microsoft.EntityFrameworkCore;
using System;

namespace ReactPeopleTableAxios.Data
{
    public class Person
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
        public int age { get; set; }
        public int id { get; set; }
    }

    public class PeopleContext
    {
        private string _connectionString;

        public PeopleContext(string connection)
        {
            _connectionString = connection;
        }

        public DbSet<Person> people { get; set; }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            optionBuilder.UseSqlServer(_connectionString);
        }
    }

    public class PeopleRepository
    {

    }
}
