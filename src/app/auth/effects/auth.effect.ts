import {Inject, Injectable, InjectionToken, Optional} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import * as Auth from '../actions/auth.action';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {User} from '../../models/User.model';
import 'rxjs/add/operator/do';
import {JwtService} from '../services/jwt.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {

  @Effect()
  login$: Observable<Action> = this.actions$.ofType(Auth.LOGIN)
    .map(toPayload)
    .mergeMap(payload =>
      this.http.post(environment.signIn, payload)
        .do((action: User) => this.jwtService.saveToken(action.token))
        .map((user: User) => new Auth.LoginSuccess(user))
        .catch(error => of(new Auth.LoginFailure(error)))
    );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$
    .ofType(Auth.LOGIN_SUCCESS)
    .do(() => this.router.navigate(['/home']));

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$
    .ofType(Auth.LOGIN_REDIRECT, Auth.LOGOUT)
    .do(authed => {
      this.router.navigate(['/auth']);
    });

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private jwtService: JwtService,
    private router: Router
  ) {}
}
