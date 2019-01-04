import { Dispatch as ReduxDispatch, Action } from 'redux';
import { Immutable } from 'seamless-immutable';
import { LoginStatus } from './enums';

export interface AppState {
  loading: boolean;
  locale: string;
  token: string;
  userId: string | null;
  loginStatus: LoginStatus;
}

export type AppStateType = Immutable<AppState>;

export interface LogEntry {
  day: Date;
  thankfulFor: string;
  stressedOut: string;
  learnedToday: string;
}

export interface LogState {
  loading: boolean;
  message: string | null;
  today: LogEntry;
  records: LogEntry[];
}

export type LogStateType = Immutable<LogState>;

interface RootState {
  app: AppStateType;
  logs: LogStateType;
}

export type ActionType<T> = {
  type: string;
  payload?: T;
};

export type RootStateType = RootState;

export type Dispatch = ReduxDispatch<Action>;
