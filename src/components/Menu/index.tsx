import * as React from 'react';

import styles from './styles.module.scss';
import { LoginStatus } from '../../constants/enums';

interface Props {
  loginStatus: LoginStatus;
  login(): {};
  logout(): {};
  changeRoute(route: string): {};
}

class Menu extends React.Component<Props> {

  toggleRef: React.RefObject<HTMLDivElement>;
  menuRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.toggleRef = React.createRef();
    this.menuRef = React.createRef();
  }

  toggleMenu() {
    if (this.toggleRef.current && this.menuRef.current) {
      this.toggleRef.current.classList.toggle(styles.menu_toggle_on);
      this.menuRef.current.classList.toggle(styles.menu_section_on);
      let navItems = this.menuRef.current.querySelector('nav ul');
      if (navItems) {
        navItems.classList.toggle(styles.hidden);
      }
    }
  }

  render()  {
    return (
      <div className={styles.menu_section} ref={this.menuRef}>
        <div className={styles.menu_toggle} onClick={() => this.toggleMenu()} ref={this.toggleRef}>
          <div className={styles.one} />
          <div className={styles.two} />
          <div className={styles.three} />
        </div>
        <nav>
          <ul role="navigation" className={styles.hidden}>
            <li>
              <button
                className={this.props.loginStatus === LoginStatus.LOGGED_IN_WITH_TOKEN ? styles.system : styles.hidden}
                onClick={() => this.props.changeRoute('/home')}
              >
                Today
              </button>
            </li>
            <li>
              <button
                className={this.props.loginStatus === LoginStatus.LOGGED_IN_WITH_TOKEN ? styles.system : styles.hidden}
                onClick={() => this.props.changeRoute('/history')}
              >
                View history
              </button>
            </li>
            <li>
              <button
                className={this.props.loginStatus === LoginStatus.LOGIN_IN_PROGRESS ? styles.hidden : styles.red}
                disabled={this.props.loginStatus === LoginStatus.LOGIN_IN_PROGRESS}
                onClick={() => this.props.loginStatus === LoginStatus.LOGGED_IN_WITH_TOKEN ?
                  this.props.logout() : this.props.login()}
              >
                {this.props.loginStatus === LoginStatus.LOGGED_IN_WITH_TOKEN ? 'Logout' : 'Login'}
              </button>
            </li>
            <li>
              <div
                id="oauth-box"
                className={this.props.loginStatus === LoginStatus.LOGIN_IN_PROGRESS ? '' : styles.hidden}
              />
            </li>
          </ul>
        </nav>
      </div>
    );
  }

}

export default Menu;
