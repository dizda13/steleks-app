import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {BaseApiInterceptor} from './base-api-interceptor';
import {HttpEvent, HttpHandler, HttpHeaders, HttpRequest} from '@angular/common/http';

@Injectable()
export class SteleksApiInterceptor extends BaseApiInterceptor {
  baseUrl = environment.steleks_base_url;

  public get headers(): HttpHeaders {
    let headers;
    console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token')) {
      headers = new HttpHeaders({'Authorization': localStorage.getItem('token')});
    } else {
      headers = null;
    }
    return headers;
  }
}
