import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  add (str: string): this {
    // ToDo : Sinnvolle Logik einbauen
    return this;
  }


}


@Injectable()
export class ConsoleLoggerService extends LoggerService {

  constructor() {
    super();
   }

  add (str: string): this {
    super.add(str);
    return this;
  }

  addDate (date: Date): this {
    return this;
  }

}
