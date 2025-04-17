using System.ComponentModel.DataAnnotations;

namespace ReactDotNetApp.Server.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; } = string.Empty;

        [Required]
        [Range(0.01, 10000)]
        public decimal Price { get; set; }

        [Required]
        [StringLength(50)]
        public string Category { get; set; } = string.Empty;

        public bool InStock { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
