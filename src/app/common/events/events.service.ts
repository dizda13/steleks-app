import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EventService {

  constructor(private httpClient: HttpClient) { }

  getEvents(page: number = 0, size: number = 1000): Observable<Event[]> {
     return this.httpClient.get(`events/realEvents?page=${page}&size=${size}`)
       .map((value: any) => <Event[]>value._embedded.events.content);
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

