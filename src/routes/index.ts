import Root from '../containers/Root';
import About from '../containers/About';
import Home from '../containers/Home';
import History from '../containers/History';

interface RouteDefinition {
  sequence: number;
  exact: boolean;
  path: string;
  // tslint:disable-next-line:no-any
  component: any;
}

interface Routes {
  [propName: string]: RouteDefinition;
}

const routes: Routes = {
  root: {
    sequence: 1,
    component: Root,
    exact: true,
    path: '/'
  },
  about: {
    sequence: 2,
    component: About,
    exact: true,
    path: '/about'
  },
  home: {
    sequence: 3,
    component: Home,
    exact: true,
    path: '/home'
  },
  history: {
    sequence: 4,
    component: History,
    exact: true,
    path: '/history'
  }
};

export default routes;
