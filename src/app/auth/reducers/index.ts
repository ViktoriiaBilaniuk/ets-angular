import * as fromAuth from './auth.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';


export interface AuthState {
  status: fromAuth.State;
}

export const reducers = {
  auth: fromAuth.reducer
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);

export const getLoggedIn = createSelector(
  selectAuthStatusState,
  fromAuth.getLoggedIn
);
export const getUser = createSelector(selectAuthStatusState, fromAuth.getUser);
