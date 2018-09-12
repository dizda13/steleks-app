import {Injectable} from '@angular/core';
import {Image} from './image';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class ImageService {

  constructor(private httpClient: HttpClient) {
  }

  getAllImages(): Observable<Image[]> {
    // TODO remove login call
    return this.httpClient.post('users/accesstoken', {
      username: 'steleks_admin',
      password: 'comein123'
    }).flatMap((response: any) => {
      let token = '';
      if (response.hasOwnProperty('token')) {
        token = response.token;
      }
      return this.httpClient.get<ImageResponse>(
        'events/medias',
        {headers: new HttpHeaders({'Authorization': token})}
        )
        .map((imageResponse: ImageResponse) => {
            return imageResponse._embedded.medias.map(
              imageData => new Image(imageData.contentUrl, imageData.id)
            );
          }
        );
    }, 1);
  }

  addImages(image: Image): Observable<Image> {
    // TODO remove login call
    return this.httpClient.post('users/accesstoken', {
      username: 'steleks_admin',
      password: 'comein123'
    }).flatMap((response: any) => {
      let token = '';
      if (response.hasOwnProperty('token')) {
        token = response.token;
      }
      const imageData = new ImageData();
      imageData.contentUrl = image.url;
      return this.httpClient.post<ImageData>(
        'events/medias',
        imageData,
        {headers: new HttpHeaders({'Authorization': token})})
        .map((iD: ImageData) => {
          return new Image(iD.contentUrl, iD.id);
        });
    }, 1);
  }

}

class ImageResponse {
  _embedded: {medias: ImageData[]};
}

class ImageData {
  id: number;
  contentUrl: String;
}
