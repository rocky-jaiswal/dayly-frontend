import { Dispatch as ReduxDispatch, Action } from 'redux';
import { Immutable } from 'seamless-immutable';
import { LoginStatus } from './enums';

export interface AppState {
  loading: boolean;
  locale: string;
  userId: string | null;
  loginStatus: LoginStatus;
}

export type AppStateType = Immutable<AppState>;

interface RootState {
  app: AppStateType;
}

export type ActionType<T> = {
  type: string;
  payload?: T;
};

export type RootStateType = RootState;

export type Dispatch = ReduxDispatch<Action>;
