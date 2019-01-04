import * as React from 'react';

import styles from './styles.module.scss';
import { LoginStatus } from '../../constants/enums';
import Menu from '../Menu';

interface Props {
  loginStatus: LoginStatus;
  login(): {};
  logout(): {};
  changeRoute(route: string): {};
}

const Header = (props: Props) => {
  return (
    <div className={styles.header}>
      <Menu {...props}/>
    </div>
  );
};

export default Header;
