using NJsonSchema.Annotations;

namespace ContactService.Models
{
    public class Address
    {
        public int? Id { get; set; }
        public int ContactId { get; set; }

        [NotNull]
        public string Street { get; set; }
        [NotNull]
        public string City { get; set; }
        [NotNull]
        public string PostalCode { get; set; }
    }
}