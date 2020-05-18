using Microsoft.EntityFrameworkCore;
using System;

namespace ReactPeopleTableAxios.Data
{
    public class PeopleContext:DbContext
    {
        private readonly string _connectionString;

        public PeopleContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        public DbSet<Person> people { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            optionBuilder.UseSqlServer(_connectionString);
        }
    }
}
