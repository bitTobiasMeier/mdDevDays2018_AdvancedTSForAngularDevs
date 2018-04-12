
import { Injectable } from '@angular/core';
import {Contact, Person,  ContactClient,  CompanyContact,  CompanyPerson} from './services.generated';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService {

  constructor(private contactClient: ContactClient) { }

  getAll () {
    const result = this.contactClient.getAll ();
    return <Observable<ContactType[] | null>> result;
  }

  public get (id: number) {
    return <Observable<ContactType | null>>  this.contactClient.get(id);
  }

  public post (contact: Contact) {
    return this.contactClient.post(contact);
  }

  public put (contact: Contact) {
    if (contact.id !== undefined) {
      return this.contactClient.put(contact.id, contact);
    } else {
      console.log ('Daten können nicht gespeichert werden!');
      throw new TypeError('Contact.id is required');
    }
  }

}

export declare type ContactType = (Person | CompanyContact | CompanyPerson);


export class Square {
  width: number;
}
export class Rectangle {
  width: number;
  height: number;
}

type test = Rectangle & Square;



