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
      const newsData = new NewsData();
      newsData.title = news.title;
      newsData.shortText = news.content;
      newsData.longText = news.fullContent;
      const medias = new Array<ImageData>();
      for (const img of news.images) {
        const imageData = new ImageData();
        imageData.id = img.id;
        imageData.contentUrl = img.url;
        medias.push(imageData);
      }
      newsData.medias = medias;
      return this.httpClient.post<NewsData>(
        'events/news',
        newsData,
        )
        .map((nD: NewsData) => {
          return news;
        });
  }

  getNews(): Observable<News[]> {

      return this.httpClient.get<NewsListResponse>(
        'events/news',
        )
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
  }

  getSingleNews(id: number): Observable<News> {
      return this.httpClient.get<NewsData>(
        'events/events/' + id,
        )
        .map((newsData: NewsData) => {
          const images = new Array<Image>();
          for (const newsImage of newsData.mediaSet) {
            images.push(new Image(newsImage.contentUrl, newsImage.id));
          }
          return new News(newsData.id, newsData.title, newsData.shortText, newsData.longText, images);
        });
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

export class ImageData {
  id: number;
  contentUrl: String;
}
