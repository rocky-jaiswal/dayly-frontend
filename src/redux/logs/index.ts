import Immutable from 'seamless-immutable';

import { ActionType, LogState, LogStateType } from '../../constants/types';
import {
  CHANGE_THANKFUL_FOR,
  CHANGE_LEARNED_TODAY,
  CHANGE_STRESSED_OUT,
  SUBMIT_LOG_IN_PROGESS,
  SUBMIT_LOG_SUCCESSFUL,
  SUBMIT_LOG_FAILED
} from './actions';

export const istate: LogState = {
  loading: false,
  message: null,
  today: {
    day: new Date(),
    thankfulFor: '',
    learnedToday: '',
    stressedOut: ''
  },
  records: []
};

export const initialState = Immutable.from(istate);

// tslint:disable-next-line:no-any
const logsReducer = (state = initialState, action: ActionType<any>): LogStateType => {
  switch (action.type) {

    case CHANGE_THANKFUL_FOR:
      return state.setIn(['today', 'thankfulFor'], action.payload);

    case CHANGE_LEARNED_TODAY:
      return state.setIn(['today', 'learnedToday'], action.payload);

    case CHANGE_STRESSED_OUT:
      return state.setIn(['today', 'stressedOut'], action.payload);

    case SUBMIT_LOG_IN_PROGESS:
      return state.set('loading', true);

    case SUBMIT_LOG_SUCCESSFUL:
      return state
        .set('message', SUBMIT_LOG_SUCCESSFUL)
        .set('loading', false);

    case SUBMIT_LOG_FAILED:
      return state
        .set('message', SUBMIT_LOG_FAILED)
        .set('loading', false);

    default:
      return state;

  }
};

export default logsReducer;
