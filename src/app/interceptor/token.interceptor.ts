import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../service/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {    
    const token = this.tokenService.getToken()
    const userPseudo = this.tokenService.getUserPseudo()
    if (token && userPseudo !== null) {
      let requestClone = request.clone({
        headers: request.headers
        .set('Authorization', 'bearer '+ token)
        // .set('Auth-user', userPseudo)
      })
      console.log(requestClone)
      return next.handle(requestClone);
    }

    return next.handle(request);
  }
}


export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
}
