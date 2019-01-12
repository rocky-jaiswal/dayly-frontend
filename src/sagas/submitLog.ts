import { call, put, select, throttle } from 'redux-saga/effects';

import API from '../api';
import { RootStateType, LogEntry } from '../constants/types';
import {
  submitLogInProgress,
  submitLogFailed,
  submitLogSuccessful,
  SUBMIT_LOG
} from '../redux/logs/actions';

const cleanup = (log: LogEntry) => {
  log.thankfulFor = log.thankfulFor.filter(s => s.trim().length > 0);
  log.learnedToday = log.learnedToday.filter(s => s.trim().length > 0);
  log.stressedOut = log.stressedOut.filter(s => s.trim().length > 0);
  return log;
};

export function* submitLog() {
  try {
    yield put(submitLogInProgress());

    const state: RootStateType = yield select();
    yield call(API.submitLog, cleanup(state.logs.today.asMutable()));
    yield put(submitLogSuccessful());
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(submitLogFailed());
  }
}

export default function* submitLogWatcher() {
  yield throttle(500, SUBMIT_LOG, submitLog);
}
