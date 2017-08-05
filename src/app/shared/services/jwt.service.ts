import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable()
export class JwtService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const headers = {
      'authorization': 'Bearer token'
    };

    const clone = req.clone({setHeaders: headers});

    return next.handle(clone);
  }

  constructor() {
  }

  getToken(): String {
    return window.localStorage['jwtToken'];
  }

  saveToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }
}
