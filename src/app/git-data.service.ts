import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { filter, map } from 'rxjs/operators';

@Injectable()

export class GitDataService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone();
    return next.handle(request)
    .pipe(
      filter(this.isHttpResponse),
      map(res => res.clone({body: res.body && res.body.items}))
    );

  }

  private isHttpResponse(event: HttpEvent<any>): event is HttpResponse<any> {
    if (event instanceof HttpResponse) {
      return true;
    }
    return false;
  }
}
