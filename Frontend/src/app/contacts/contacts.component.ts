import {Observable} from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import {CompanyPerson, Person,   Contact,  CompanyContact} from '../services/services.generated';
import { ContactService, ContactType } from '../services/contact.service';



@Component({
  selector: 'md-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: ContactType [] | null = null;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
     this.contactService.getAll().subscribe ( (data) => {
       this.contacts = data;
     });
  }

  isPerson (contact: ContactType): contact is Person {
      return contact instanceof Person;
  }

  isCompany (contact: ContactType): contact is CompanyContact | CompanyPerson {
      if (contact instanceof CompanyContact) { return true; }
      if (contact instanceof CompanyPerson) { return true; }
      return false;
  }

  getSummary (contact: ContactType) {
    if (this.isCompany(contact)) {
      return contact.company;
    } else {
      return contact.firstname + ' ' + contact.lastname;
    }
  }
}

