import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import * as firebase from 'firebase/app';
import firebaseui from 'firebaseui';

import { App } from './containers/App';
import { configureStore } from './store';
import Config from './config';
import * as serviceWorker from './serviceWorker';

import 'normalize.css';
import './styles/reset.css';
import './styles/main.css';

export const firebaseApp = firebase.initializeApp({
  apiKey: Config.env.apiKey,
  authDomain: Config.env.authDomain,
  databaseURL: Config.env.databaseURL,
  projectId: Config.env.projectId,
  storageBucket: Config.env.storageBucket,
  messagingSenderId: Config.env.messagingSenderId
});

export const firebaseUI = new firebaseui.auth.AuthUI(firebaseApp.auth());

const history  = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

serviceWorker.register();
