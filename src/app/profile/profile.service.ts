import {Injectable} from '@angular/core';
import { Image } from '../common/imagemanager/image';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class ProfileService {

  constructor(private httpClient: HttpClient) {
  }

  getLoggedInUser(): Observable<UserData> {
    // TODO remove login call
    return this.httpClient.post('users/accesstoken', {
      username: 'steleks_admin',
      password: 'comein123'
    }).flatMap((response: any) => {
      let token = '';
      if (response.hasOwnProperty('token')) {
        token = response.token;
      }
      return this.httpClient.get<UserData>(
        'users/users/current',
        {headers: new HttpHeaders({'Authorization': token})});
    }, 1);
  }

}

export class UserData {
  firstName: String;
  lastName: String;
  username: String;
  contactNumber: String;
  email: String;
  cardNumber: number;
  profilePictureUrl: String;
}
