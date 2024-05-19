import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const authToken = authService.getToken();
  const router = inject(Router)
  if(authToken) {
    const newReq = req.clone({
      setHeaders: {
        Authorization:`Bearer ${authToken}`
      }
      
    });
    return next(newReq)
  }
  return next(req).pipe(
    catchError(error => {
    if(error instanceof  HttpErrorResponse && error.status === 401 ) {
      router.navigate(["/login"]);
    }     
    return throwError(() => error);
    })
  );
};