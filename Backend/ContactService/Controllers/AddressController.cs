using System.Collections.Generic;
using System.Linq;
using System.Net;
using ContactService.Models;
using Microsoft.AspNetCore.Mvc;

namespace ContactService.Controllers
{
    [Route("api/[controller]")]
    public class AddressController : Controller
    {
        private static List<Address> _addresses = new List<Address>()
        {
            new Address() {Id = 1, ContactId = 1, Street = "Musterstraße", City = "Karlsruhe",PostalCode = "76200"},
            new Address() {Id = 2, ContactId = 3, Street = "Marienstr", City = "Stuttgart",PostalCode = "70178"},
        };

        public AddressController()
        {

        }

      
        [NSwag.Annotations.SwaggerResponse(HttpStatusCode.OK, typeof(List<Contact>))]
        [HttpGet("{contactId}")]
        public Address Get(int contactId)
        {
            return _addresses.FirstOrDefault(a => a.ContactId == contactId);
        }
    }
}