import loadInitialDataWatcher from './loadInitialData';
import authEventsSaga from './firebase';

export default [
  loadInitialDataWatcher,
  authEventsSaga
];
