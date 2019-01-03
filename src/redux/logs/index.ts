import Immutable from 'seamless-immutable';

import { ActionType, LogState, LogStateType } from '../../constants/types';
import {
  CHANGE_THANKFUL_FOR,
  CHANGE_LEARNED_TODAY,
  CHANGE_STRESSED_OUT
} from './actions';

export const istate: LogState = {
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

    default:
      return state;

  }
};

export default logsReducer;
