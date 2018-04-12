using NJsonSchema.Annotations;

namespace ContactService.Models
{
    public class Person : Contact
    {
        [NotNull()]
        public string Firstname { get; set; }
        [NotNull()]
        public string Lastname { get; set; }
        public int ? Age { get; set; }

        
    }
}