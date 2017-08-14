import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as fromAuth from '../reducers';
import * as Auth from '../actions';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<any>) {}

  canActivate(): Observable<boolean> {
    return this.store.select(fromAuth.getLoggedIn).take(1).map(authed => {
      if (!authed) {
        this.store.dispatch(new Auth.LoginRedirect());
        return false;
      }

      return true;
    });
  }
}
