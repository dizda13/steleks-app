import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {forEach} from '@angular/router/src/utils/collection';

export abstract class BaseApiInterceptor implements HttpInterceptor {

  abstract baseUrl: String;
  abstract headers: HttpHeaders;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = HeaderUtil.combineHeaders(req.headers, this.headers)
    let apiReq: any;
    console.log(headers)
    if (headers) {
      apiReq = req.clone(
        {
          url: `${this.baseUrl}/${req.url}`,
          headers: headers
        }
      );
    } else {
      apiReq = req.clone(
        {
          url: `${this.baseUrl}/${req.url}`,
        }
      );
    }
    return next.handle(apiReq);
  }

}

class HeaderUtil {
  /**
   * Combines two instances of {@link HttpHeaders}
   * @param {HttpHeaders} first instance of http headers
   * @param {HttpHeaders} second instance of http headers - this one overwrites on conflict
   * @returns {HttpHeaders} combined instance
   */
  static combineHeaders(first: HttpHeaders, second: HttpHeaders) {
    let combined: any = {};
    if (first) {
      for (const key of first.keys()) {
        combined[key] = first.get(key);
      }
    }
    if (second) {
      for (const key of second.keys()) {
        combined[key] = second.get(key);
      }
    }
    console.log("combined", combined);
    if (combined) {
      return new HttpHeaders(combined);
    }
    return null;
  }
}

