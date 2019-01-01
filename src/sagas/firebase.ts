import { eventChannel } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
import { firebaseApp } from '..';
import { loginSuccessful } from '../redux/app/actions';

const authEvents = () => {
  return eventChannel((emitter) => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      emitter(user || {});
    });
    // The subscriber must return an unsubscribe function
    return () => {};
  });
};

export default function* authEventsSaga() {
  const chan = yield call(authEvents);
  try {
    while (true) {
      // take(END) will cause the saga to terminate by jumping to the finally block
      const res = yield take(chan);
      if (res.email && res.uid) {
        yield put(loginSuccessful(res.uid));
      }
    }
  } finally {
    console.log('saga terminated');
  }
}
