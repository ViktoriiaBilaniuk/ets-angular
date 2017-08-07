import * as Auth from '../actions/auth.action';
import {User} from '../../models/User.model';

export interface Action {
  type: string;
  payload: any;
}

export interface State {
  loggedIn: boolean;
  user: User | null;
}

export const initialState: State = {
  loggedIn: false,
  user: null,
};

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case Auth.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
      };

    case Auth.LOGIN_FAILURE:
      console.log(action);
      return state;

    default:
      return state;
  }
}
