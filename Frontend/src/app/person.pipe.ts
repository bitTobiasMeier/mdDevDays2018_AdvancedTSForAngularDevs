import { Pipe, PipeTransform } from '@angular/core';
import {Contact, Person} from './services/services.generated';

@Pipe({
  name: 'person'
})
export class PersonPipe implements PipeTransform {

  transform(value: Contact, args?: any): Person {
    if ((<any>value).lastname) {
      return value as Person;
    }
    return null;
  }

}
