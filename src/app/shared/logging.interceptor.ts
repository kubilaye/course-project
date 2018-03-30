import {HttpInterceptor} from '@angular/common/http';
import {HttpRequest} from '@angular/common/http/src/request';
import {HttpHandler} from '@angular/common/http/src/backend';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {HttpEvent} from '@angular/common/http/src/response';

export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).do(
      event => {
        console.log ('log: a request has been sent', event);
      }
    );
  }
}
