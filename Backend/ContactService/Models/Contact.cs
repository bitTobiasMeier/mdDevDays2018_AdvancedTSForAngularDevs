using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;
using Newtonsoft.Json;
using NJsonSchema.Annotations;
using NJsonSchema.Converters;

namespace ContactService.Models
{
    [KnownType(typeof(CompanyPerson))]
    [KnownType(typeof(CompanyContact))]
    [KnownType(typeof(Person))]
    [JsonConverter(typeof(JsonInheritanceConverter), "discriminator")]
    public class Contact
    {
        public int? Id { get; set; }
    }

    public class CompanyContact : Contact
    {
        [NotNull()]
        public string Company { get; set; }
    }
}
