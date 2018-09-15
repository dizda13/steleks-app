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
      return this.httpClient.get<ImageResponse>(
        'events/medias',
        )
        .map((imageResponse: ImageResponse) => {
            return imageResponse._embedded.medias.map(
              imageData => new Image(imageData.contentUrl, imageData.id)
            );
          }
        );
  }

  addImages(image: Image): Observable<Image> {
    // TODO remove login call
      const imageData = new ImageData();
      imageData.contentUrl = image.url;
      return this.httpClient.post<ImageData>(
        'events/medias',
        imageData,
       )
        .map((iD: ImageData) => {
          return new Image(iD.contentUrl, iD.id);
        });
  }

}

class ImageResponse {
  _embedded: {medias: ImageData[]};
}

class ImageData {
  id: number;
  contentUrl: String;
}
