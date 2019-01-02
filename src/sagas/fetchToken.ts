import { call, put, select, takeLatest } from 'redux-saga/effects';

import { FETCH_TOKEN } from '../redux/app/actions';

import {
  fetchTokenFailed,
  fetchTokenInProgress,
  fetchTokenSuccess
} from '../redux/app/actions';

import API from '../api';
import { RootStateType } from '../constants/types';

export function* fetchToken() {
  try {
    yield put(fetchTokenInProgress());

    const state: RootStateType = yield select();
    const resp = yield call(API.fetchToken, state.app.userId || '');
    yield put(fetchTokenSuccess(resp.data.token));
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(fetchTokenFailed());
  }
}

export default function* fetchTokenWatcher() {
  yield takeLatest(FETCH_TOKEN, fetchToken);
}
