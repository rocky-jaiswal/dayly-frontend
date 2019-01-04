import fetchTokenWatcher from './fetchToken';
import authEventsSaga from './firebase';
import submitLogWatcher from './submitLog';
import fetchLogsWatcher from './fetchLogs';

export default [
  fetchTokenWatcher,
  authEventsSaga,
  submitLogWatcher,
  fetchLogsWatcher
];
