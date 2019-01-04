import Immutable from 'seamless-immutable';
import firebase from 'firebase';

import { firebaseUI, firebaseApp } from '../../index';
import { AppStateType, AppState, ActionType } from '../../constants/types';
import { LOGIN, LOGIN_SUCCESSFUL, LOGOUT, FETCH_TOKEN_SUCCESS, FETCH_TOKEN_INPROGRESS } from './actions';
import { LoginStatus } from '../../constants/enums';

export const istate: AppState = {
  locale: 'en',
  loading: false,
  token: localStorage.getItem('token') || '',
  userId: null,
  loginStatus: LoginStatus.NOT_LOGGED_IN
};

export const initialState = Immutable.from(istate);

// tslint:disable-next-line:no-any
const appReducer = (state = initialState, action: ActionType<any>): AppStateType => {
  switch (action.type) {

    case LOGIN:
      firebaseUI.start('#oauth-box', {
        callbacks: {
          signInSuccessWithAuthResult: () => false
        },
        signInFlow: 'popup',
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
      });
      return state.set('loginStatus', LoginStatus.LOGIN_IN_PROGRESS);

    case LOGIN_SUCCESSFUL:
      return state
        .set('userId', action.payload)
        .set('loginStatus', LoginStatus.LOGGED_IN);

    case LOGOUT:
      firebaseApp.auth().signOut();
      localStorage.clear();
      return state
        .set('userId', null)
        .set('loginStatus', LoginStatus.NOT_LOGGED_IN);

    case FETCH_TOKEN_INPROGRESS:
      return state
        .set('loading', true)
        .set('loginStatus', LoginStatus.LOGIN_IN_PROGRESS);

    case FETCH_TOKEN_SUCCESS:
      localStorage.setItem('token', action.payload);
      return state
        .set('loginStatus', LoginStatus.LOGGED_IN_WITH_TOKEN)
        .set('loading', false)
        .set('token', action.payload);

    default:
      return state;

  }
};

export default appReducer;
