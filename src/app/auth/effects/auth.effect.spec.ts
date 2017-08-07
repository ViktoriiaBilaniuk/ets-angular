import {Observable} from 'rxjs/Observable';
import {AuthEffects} from './auth.effect';
import {TestBed} from '@angular/core/testing';
import * as Auth from '../actions/auth.action';
import { empty } from 'rxjs/observable/empty';
// import {provideMockActions} from '@ngrx/effects/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {JwtService} from '../services/jwt.service';
import {Actions} from '@ngrx/effects';
import {EffectsRunner} from '@ngrx/effects/src/effects_runner';
import {cold, hot} from 'jasmine-marbles';


export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}


describe('AuthEffects', () => {
  let effects: AuthEffects;
  let actions$: TestActions;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        JwtService,
        HttpClient,
        HttpHandler,
        EffectsRunner,
        { provide: Actions, useFactory: getActions }
      ],
    });

    effects = TestBed.get(AuthEffects);
    actions$ = TestBed.get(Actions);
  });

  it('should work', () => {
    let user = {
      'id': 1,
      'email': 'owner@mail.com',
      'first_name': 'Owner',
      'last_name': 'Owner',
      'position': [
        'default'
      ],
      'roles': [
        'owner'
      ],
      'rate': 0,
      'locked': 0,
      'created_at': '2017-06-26T04:17:56.000Z',
      'updated_at': '2017-06-26T04:17:56.000Z',
      'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTAyMTAyMDI4LCJleHAiOjE1MTI0NzAwMjh9.Jb7wfL6HK7UVwx6u3sVGCo-vpgRue9kOlP1V-CLA1mY'
    };

    const action = new Auth.Login({email: '', password: ''});
    const completion = new Auth.LoginFailure({});

    actions$.stream = hot('-a---', { a: action });
    const expected = cold('----b', { b: completion });
    expect(effects.login$).toBeObservable(expected);
  });
});
