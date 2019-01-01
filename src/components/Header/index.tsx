import * as React from 'react';

import styles from './styles.module.scss';
import { LoginStatus } from '../../constants/enums';

interface Props {
  loginStatus: LoginStatus;
  login(): {};
  logout(): {};
}

const Header = (props: Props) => {
  return (
    <div className={styles.header}>
      <div
        id="oauth-box"
        className={props.loginStatus === LoginStatus.LOGIN_IN_PROGRESS ? '' : styles.hidden}
      />
      <button
        className={props.loginStatus !== LoginStatus.LOGIN_IN_PROGRESS ? '' : styles.hidden}
        disabled={props.loginStatus === LoginStatus.LOGIN_IN_PROGRESS}
        onClick={() => props.loginStatus === LoginStatus.LOGGED_IN ? props.logout() : props.login()}
      >
        {props.loginStatus === LoginStatus.LOGGED_IN ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Header;
