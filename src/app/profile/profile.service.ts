import {Injectable} from '@angular/core';
import { Image } from '../common/imagemanager/image';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

@Injectable()
class ProfileService {

  constructor(private httpClient: HttpClient) {
  }

  getLoggedInUser(): Observable<UserData> {
      return this.httpClient.get<UserData>(
        'users/users/current');
  }
  updateProfile(userData: UserData): Observable<UserData>{
    console.log(userData);
    return this.httpClient.patch<UserData>('users/users/current', userData);
  }

}

class UserData {
  firstName: String;
  lastName: String;
  username: String;
  contactNumber: String;
  email: String;
  cardNumber: number;
  profilePictureUrl: String;
}

export {UserData, ProfileService};
