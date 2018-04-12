import { Pipe, PipeTransform } from '@angular/core';
import {Contact, Person} from './services/services.generated';

@Pipe({
  name: 'person'
})
export class PersonPipe implements PipeTransform {

  transform(value: Contact, args?: any): Person | null {
    if (value instanceof Person) {
      return value;
    }
    return null;
  }

}
