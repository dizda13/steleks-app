import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EventService {

  constructor(private httpClient: HttpClient) { }

  getEvents(): Observable<Event[]> {
     return this.httpClient.get('events/realEvents').map(value => <Event[]>value);
  }
}

export class Event {
  id: number;
  title: string;
  shortText: string;
  longText: string;
  dateTime: Date;
  duration: number;
  mediaSet: any[];
}

