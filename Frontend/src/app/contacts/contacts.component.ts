import {Observable} from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import {Person, ContactClient,  Contact} from '../services/services.generated';

@Component({
  selector: 'md-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: Observable<Contact[]>;
  constructor(private contactClient: ContactClient) { }

  ngOnInit() {
    this.contacts = this.contactClient.getAll();
  }

  isPerson (contact: Contact) {
      // const person = contact as Person;
      // return person != null && person !== undefined && person;
      return contact instanceof Person;
  }

}

