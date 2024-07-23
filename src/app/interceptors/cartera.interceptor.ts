import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { HttpInterceptorFn } from '@angular/common/http';
import { TokenDtoService } from '../service/token-dto.service';
import { Router } from '@angular/router';

@Injectable()
export class CarteraInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenDtoService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = request;
    const token = this.tokenService.getToken();

    if (token != null) {
      authReq = authReq.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
      });
    }

    return next.handle(authReq).pipe(catchError(this.manejaError));
  }

  manejaError(error: HttpErrorResponse) {
    console.log('Error en la peticion');
    return throwError(() => new Error('Error en la peticion'));
  }
}

/*
export const carteraInterceptor = [
  { provide: HTTP_INTERCEPTORS, useClass: CarteraInterceptor, multi: true },
];
*/
