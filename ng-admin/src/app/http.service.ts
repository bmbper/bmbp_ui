import { Injectable } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { SERVER_API } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get<T>(url: string, params: any): Observable<T> {
    return this.http.get<T>(url, {
      params: params,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  post<T>(url: string, params?: any): Observable<T> {
    let reqData = JSON.stringify(params || {});
    return this.http
      .post<T>(url, reqData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(() => new Error(err.message));
  }
}

@Injectable()
export class HttpServiceInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('拦截一下');
    let authToken = window.localStorage.getItem('bmbp_token');
    let headers = {
      'Content-Type': 'application/json',
      ContentType: 'application/json',
      Authorization: authToken || '',
    };
    let newUrl =
      req.url.startsWith('http://') || req.url.startsWith('https://')
        ? req.url
        : req.url.startsWith('/')
        ? SERVER_API + req.url
        : SERVER_API + '/' + req.url;
    const newReq = req.clone({
      url: newUrl,
      headers: Object.assign(req.headers, headers),
    });

    return next.handle(newReq);
  }
}

// HTTP 拦截器
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpServiceInterceptor, multi: true },
];
