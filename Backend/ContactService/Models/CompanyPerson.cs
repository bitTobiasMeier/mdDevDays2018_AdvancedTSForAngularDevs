using NJsonSchema.Annotations;

namespace ContactService.Models
{
    public class CompanyPerson : Person
    {
        [NotNull()]
        public string Company { get; set; }
    }
}