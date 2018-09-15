import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http} from '@angular/http';


@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public login(username: string, password: string) {
    return this.httpClient.post('users/accesstoken', {
      username,
      password
    }).map((token: any) => {
      localStorage.setItem('token', token.token);
      localStorage.setItem('roles', token.roles);
      localStorage.setItem('userId', token.userId);
      return token;
    }).subscribe();
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    localStorage.removeItem('userId');
  }

  public getAuthObject() {
     return {
       token: localStorage.getItem('token'),
      roles: localStorage.getItem('roles'),
      userId: localStorage.getItem('userId'),
    };
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public getRoles() {
    return localStorage.getItem('roles');
  }

  public getUserId() {
    return localStorage.getItem('userId');
  }
}
