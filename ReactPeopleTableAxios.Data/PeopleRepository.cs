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

        public void AddPerson(Person p)
        {
            PeopleContext pc = new PeopleContext(_connectionString);
            pc.people.Add(p);
            pc.SaveChanges();
        }

        public void DeletePerson(int personId)
        {
            PeopleContext pc = new PeopleContext(_connectionString);
            Person person = pc.people.FirstOrDefault(p => p.id == personId);
            pc.people.Remove(person);
            pc.SaveChanges();
        }
        public void EditPerson(Person person)
        {
            PeopleContext pc = new PeopleContext(_connectionString);
            //Person personFromDb = pc.people.FirstOrDefault(p => p.id == person.id);
            //if (personFromDb.firstName != person.firstName || personFromDb.lastName != person.lastName || personFromDb.age != person.age)
            //{
                pc.Entry(person).State = EntityState.Modified;
                pc.SaveChanges();
            //}
        }


    }
}
