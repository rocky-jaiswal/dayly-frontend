import { call, put, select, takeLatest } from 'redux-saga/effects';

import API from '../api';
import { RootStateType } from '../constants/types';
import {
  submitLogInProgress,
  submitLogFailed,
  submitLogSuccessful,
  SUBMIT_LOG
} from '../redux/logs/actions';

export function* submitLog() {
  try {
    yield put(submitLogInProgress());

    const state: RootStateType = yield select();
    yield call(API.submitLog, state.logs.today.asMutable());
    yield put(submitLogSuccessful());
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(submitLogFailed());
  }
}

export default function* submitLogWatcher() {
  yield takeLatest(SUBMIT_LOG, submitLog);
}
