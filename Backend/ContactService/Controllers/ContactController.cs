using System.Net;
using ContactService.Models;
using NJsonSchema.Annotations;

namespace ContactService.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;

    [Route("api/[controller]")]
    public class ContactController : Controller
    {
        private static List<Contact> _contacts = new List<Contact>()
        {
            new Person() {Id =1, Firstname = "Tobias", Lastname = "Meier",Age = 45},
            new CompanyPerson() {Id =2, Firstname = "Tobias", Lastname = "Meier", Age = 45,Company = "BridgingIT GmbH"},
            new CompanyContact() {Id =3, Company = "BridgingIT GmbH"}
        };

        public ContactController()
        {

        }

        [NSwag.Annotations.SwaggerResponse(HttpStatusCode.OK,typeof(List<Contact>))]
        [HttpGet]
        public IEnumerable<Contact> Get()
        {
            return _contacts;
        }

        [HttpGet("{id}")]
        public Contact Get(int id)
        {
            return _contacts.FirstOrDefault(c => c.Id == id);
        }

        [HttpPost]
        public void Post([NotNull][FromBody]Contact contact)
        {
            contact.Id = _contacts.Max(c => c.Id) + 1;
            _contacts.Add(contact);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Contact contact)
        {
            var oldcontact = _contacts.FirstOrDefault(c => c.Id == id);
            _contacts.Remove(oldcontact);
            _contacts.Add(contact);
        }

      
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
