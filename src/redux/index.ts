import { combineReducers, Reducer, AnyAction } from 'redux';
import { RootStateType } from '../constants/types';

import appReducer from './app/';
import logReducer from './logs';

import { initialState as appInitialState } from './app';
import { initialState as logsInitialState } from './logs';

export const reduxInitialState: RootStateType = {
  app: appInitialState,
  logs: logsInitialState
};

export function createReducer(): Reducer<RootStateType> {
  const reducer = combineReducers<RootStateType>({
    app: appReducer,
    logs: logReducer
  });

  const rootReducer = (state: RootStateType | undefined, action: AnyAction): RootStateType => {
    // if (action.type === LOGOUT) {
    //   sessionStorage.clear();
    //   state = reduxInitialState;
    // }
    return reducer(state, action);
  };

  return rootReducer;
}
