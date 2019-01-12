import Immutable from 'seamless-immutable';

import { ActionType, LogState, LogStateType } from '../../constants/types';
import {
  CHANGE_THANKFUL_FOR,
  CHANGE_LEARNED_TODAY,
  CHANGE_STRESSED_OUT,
  SUBMIT_LOG_IN_PROGESS,
  SUBMIT_LOG_SUCCESSFUL,
  SUBMIT_LOG_FAILED,
  FETCH_LOGS_IN_PROGESS,
  FETCH_LOGS_SUCCESSFUL,
  FETCH_LOGS_FAILED,
  ADD_LINE,
  ADD_OPEN_RECORD
} from './actions';

export const istate: LogState = {
  loading: false,
  message: null,
  today: {
    day: new Date(),
    thankfulFor: [''],
    learnedToday: [''],
    stressedOut: ['']
  },
  records: [],
  openRecords: null
};

export const initialState = Immutable.from(istate);

const addToArray = (arr: string[], newEntry: { val: string, idx: number }) => {
  return Immutable.from(arr.map((e, i) => {
    if (i === newEntry.idx) {
      return newEntry.val;
    }
    return e;
  }));
};

// tslint:disable-next-line:no-any
const logsReducer = (state = initialState, action: ActionType<any>): LogStateType => {
  switch (action.type) {

    case ADD_LINE:
      return state.setIn(['today', action.payload], state.today.getIn([action.payload]).concat(''));

    case CHANGE_THANKFUL_FOR:
      return state.setIn(['today', 'thankfulFor'], addToArray(state.today.thankfulFor.asMutable(), action.payload));

    case CHANGE_LEARNED_TODAY:
      return state.setIn(['today', 'learnedToday'], addToArray(state.today.learnedToday.asMutable(), action.payload));

    case CHANGE_STRESSED_OUT:
      return state.setIn(['today', 'stressedOut'], addToArray(state.today.stressedOut.asMutable(), action.payload));

    case SUBMIT_LOG_IN_PROGESS:
      return state.set('loading', true);

    case FETCH_LOGS_IN_PROGESS:
      return state.set('loading', true);

    case SUBMIT_LOG_SUCCESSFUL:
      return state
        .set('message', SUBMIT_LOG_SUCCESSFUL)
        .set('loading', false);

    case SUBMIT_LOG_FAILED:
      return state
        .set('message', SUBMIT_LOG_FAILED)
        .set('loading', false);

    case FETCH_LOGS_SUCCESSFUL:
      return state
        .set('records', action.payload)
        .set('loading', false);

    case FETCH_LOGS_FAILED:
      return state
        .set('message', FETCH_LOGS_FAILED)
        .set('loading', false);

    case ADD_OPEN_RECORD:
      if (state.openRecords) {
        const found = state.openRecords.find((e) => e === action.payload);
        if (found !== 0 && !found) {
          return state.set('openRecords', state.openRecords.concat(action.payload));
        }
        return state.set('openRecords', state.openRecords.filter((e) => e !== action.payload));
      } else {
        return state.set('openRecords', [action.payload]);
      }

    default:
      return state;

  }
};

export default logsReducer;
