using Microsoft.EntityFrameworkCore;
using ReactDotNetApp.Server.Models;

namespace ReactDotNetApp.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Product> Products { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Seed data
            modelBuilder.Entity<Product>().HasData(
                new Product
                {
                    Id = 1,
                    Name = "Laptop",
                    Price = 999.99m,
                    Category = "Electronics",
                    InStock = true,
                    CreatedAt = DateTime.UtcNow
                },
                new Product
                {
                    Id = 2,
                    Name = "T-Shirt",
                    Price = 19.99m,
                    Category = "Clothing",
                    InStock = true,
                    CreatedAt = DateTime.UtcNow
                },
                new Product
                {
                    Id = 3,
                    Name = "Coffee Maker",
                    Price = 89.99m,
                    Category = "Home",
                    InStock = false,
                    CreatedAt = DateTime.UtcNow
                }
            );
        }
    }
}
