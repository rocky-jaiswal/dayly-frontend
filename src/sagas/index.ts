import fetchTokenWatcher from './fetchToken';
import authEventsSaga from './firebase';
import submitLogWatcher from './submitLog';

export default [
  fetchTokenWatcher,
  authEventsSaga,
  submitLogWatcher
];
