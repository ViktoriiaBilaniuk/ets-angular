import {Injectable} from '@angular/core';
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


@Injectable()
export class AuthEffects {

  @Effect() login$: Observable<Action> = this.actions$.ofType(Auth.LOGIN)
    .map(toPayload)
    .mergeMap(payload =>
      this.http.post(environment.signIn, payload)
        .do((action: User) => this.jwtService.saveToken(action.token))
        .map((user: User) => new Auth.LoginSuccess(user))
        .catch(error => of(new Auth.LoginFailure(error)))
    );

  // @Effect() getUser$: Observable<Action> = this.actions$.ofType(AuthAction.GET_USER)
  //   .map(toPayload)
  //   .mergeMap(payload =>
  //     this.http.get(environment.userInfo)
  //       .map(data => ({ type: AuthAction.LOGIN_SUCCESS, payload: data }))
  //       .catch(() => of({ type: AuthAction.LOGIN_FAILED }))
  //   );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private jwtService: JwtService
  ) {}
}
