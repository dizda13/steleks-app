import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

export abstract class BaseApiInterceptor implements HttpInterceptor {

  abstract baseUrl: String;
  abstract headers: HttpHeaders;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone(
      {
        url: `${this.baseUrl}/${req.url}`,
        headers: HeaderUtil.combineHeaders(req.headers, this.headers)
      }
  );
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
    let combined: HttpHeaders = new HttpHeaders();
    for (const key of first.keys()) {
      combined = combined.append(key, first.getAll(key));
    }
    for (const key of second.keys()) {
      combined = combined.append(key, second.getAll(key));
    }
    return combined;
  }
}

