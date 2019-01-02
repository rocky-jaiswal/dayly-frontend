import fetchTokenWatcher from './fetchToken';
import authEventsSaga from './firebase';

export default [
  fetchTokenWatcher,
  authEventsSaga
];
