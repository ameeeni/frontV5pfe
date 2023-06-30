import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import{AuthenticateService} from "./authenticate.service";

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private authService:AuthenticateService ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = window.localStorage.getItem( 'token');
    if (token) {

      req = req.clone({
        setHeaders: {
          Authorisation: `Bearer ${token}`
        }
      });

    }

    return next.handle(req);
  }
}

