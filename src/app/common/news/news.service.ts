import {Injectable} from '@angular/core';
import { Image } from '../imagemanager/image';
import { News } from '../../news/news.model';
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

  getNews(): Observable<News[]> {
    // TODO remove login call
    return this.httpClient.post('users/accesstoken', {
      username: 'steleks_admin',
      password: 'comein123'
    }).flatMap((response: any) => {
      let token = '';
      if (response.hasOwnProperty('token')) {
        token = response.token;
      }
      return this.httpClient.get<NewsListResponse>(
        'events/events',
        {headers: new HttpHeaders({'Authorization': token})})
        .map((newsResponse: NewsListResponse) => {
          console.log(newsResponse);
          console.log(newsResponse._embedded);
          console.log(newsResponse._embedded.events);
          return newsResponse._embedded.events;
        })
        .map((newsDatas: NewsData[]) => {
          const newNews = new Array<News>();
          for (const newsData of newsDatas) {
            const images = new Array<Image>();
            for (const newsImage of newsData.mediaSet) {
              images.push(new Image(newsImage.contentUrl, newsImage.id));
            }
            newNews.push(new News(newsData.id, newsData.title, newsData.shortText, newsData.longText, images));
          }
          return newNews;
        });
    }, 1);
  }

}

class NewsListResponse {
  _embedded: NewsListInner;
}

class NewsListInner {
  events: NewsData[];
}

class NewsData {
  id: number;
  title: String;
  shortText: String;
  longText: String;
  medias: ImageData[];
  mediaSet: ImageData[];
}

class ImageData {
  id: number;
  contentUrl: String;
}
