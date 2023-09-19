using FullStack.API.Models;
using Microsoft.EntityFrameworkCore;

namespace FullStack.API.Data
{
    public class FullStackDbContext:DbContext
    {
        public FullStackDbContext(DbContextOptions<FullStackDbContext> options):base(options) { }


        public DbSet<Employee> EmployeesAngular { get; set; }
    }
}
