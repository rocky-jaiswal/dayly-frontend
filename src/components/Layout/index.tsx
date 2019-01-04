import * as React from 'react';

import Footer from '../Footer';
import Header from '../Header';

import styles from './styles.module.scss';
import { LoginStatus } from '../../constants/enums';

interface Props {
  loginStatus: LoginStatus;
  login(): {};
  logout(): {};
  changeRoute(route: string): {};
  children?: React.ReactElement<{}>;
}

const Layout = (props: Props) => {

  return (
    <div className={styles.main_container}>
      <Header
        loginStatus={props.loginStatus}
        login={props.login}
        logout={props.logout}
        changeRoute={props.changeRoute}
      />
      <div className={styles.page}>
        <div className={styles.main}>
          {React.Children.toArray(props.children)}
        </div>
      </div>
      <Footer />
    </div>
  );

};

export default Layout;
