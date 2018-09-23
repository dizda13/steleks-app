import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { ImageData } from '../news/news.service';
import {News} from '../../news/news.model';
@Injectable()
export class EventService {

  constructor(private httpClient: HttpClient) { }

  getEvents(page: number = 0, size: number = 1000): Observable<Event[]> {
     return this.httpClient.get(`events/realEvents?page=${page}&size=${size}`)
       .map((value: any) => {
         const events: any[] = value._embedded.events.content;
         events.forEach((event: any) => {event.mediaSet = event.mediaSet.map((media: any): Event => {
           return media.contentUrl;
         });
         });
         return <Event[]>events;
       });
  };
  addEvent(event: News): Observable<any> {
    const newsData = new Event();
    newsData.title = event.title;
    newsData.shortText = event.content;
    newsData.longText = event.fullContent;
    const medias = new Array<ImageData>();
    for (const img of event.images) {
      const imageData = new ImageData();
      imageData.id = img.id;
      imageData.contentUrl = img.url;
      medias.push(imageData);
    }
    newsData.medias = medias;
    return this.httpClient.post(
      'events/realEvents',
      newsData,
    )
      .map((nD: Event) => {
        return nD;
      });
  }
}

export class Event {
  id: number;
  title: String;
  shortText: String;
  longText: String;
  dateTime: Date;
  duration: number;
  medias: ImageData[];
  mediaSet: string[];
}

