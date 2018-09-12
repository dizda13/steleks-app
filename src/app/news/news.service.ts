import {Injectable} from '@angular/core';
import { Image } from '../common/imagemanager/image';
import { News } from './news.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class NewsService {

  constructor(private httpClient: HttpClient) {
  }

  addNews(news: News): Observable<News> {
    // TODO remove login call
    return this.httpClient.post('users/accesstoken', {
      username: 'steleks_admin',
      password: 'comein123'
    }).flatMap((response: any) => {
      let token = '';
      if (response.hasOwnProperty('token')) {
        token = response.token;
      }
      const newsData = new NewsData();
      newsData.title = news.title;
      newsData.shortText = 'Short';
      newsData.longText = news.content;
      const medias = new Array<ImageData>();
      for (const img of news.images) {
        const imageData = new ImageData();
        imageData.id = img.id;
        imageData.contentUrl = img.url;
        medias.push(imageData);
      }
      newsData.medias = medias;
      return this.httpClient.post<NewsData>(
        'events/events',
        newsData,
        {headers: new HttpHeaders({'Authorization': token})})
        .map((nD: NewsData) => {
          return news;
        });
    }, 1);
  }

}

class NewsData {
  title: String;
  shortText: String;
  longText: String;
  medias: ImageData[];
}

class ImageData {
  id: number;
  contentUrl: String;
}
