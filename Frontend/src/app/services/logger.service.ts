import { Injectable } from '@angular/core';


@Injectable()
export class LoggerService {

  constructor() { }

  add (str: string): LoggerService {
    // ToDo : Sinnvolle Logik einbauen
    return this;
  }

}


@Injectable()
export class ConsoleLoggerService extends LoggerService {

  constructor() {
    super();
   }

  add (str: string): ConsoleLoggerService {
    super.add(str);
    return this;
  }

  addDate (date: Date): ConsoleLoggerService {
    return this;
  }

}

