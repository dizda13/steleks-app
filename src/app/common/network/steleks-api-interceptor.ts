import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {BaseApiInterceptor} from './base-api-interceptor';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class SteleksApiInterceptor extends BaseApiInterceptor {
  baseUrl = environment.steleks_base_url;
  headers = new HttpHeaders();
}
