import { call, put, takeLatest } from 'redux-saga/effects';

import API from '../api';
import {
  FETCH_LOGS,
  fetchLogsInProgress,
  fetchLogsSuccessful,
  fetchLogsFailed
} from '../redux/logs/actions';

export function* fetchLogs() {
  try {
    yield put(fetchLogsInProgress());

    const resp = yield call(API.fetchLogs);
    yield put(fetchLogsSuccessful(resp.data));
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(fetchLogsFailed());
  }
}

export default function* fetchLogsWatcher() {
  yield takeLatest(FETCH_LOGS, fetchLogs);
}
