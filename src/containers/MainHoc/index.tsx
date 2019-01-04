import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { RootStateType, Dispatch } from '../../constants/types';
import { login, logout } from '../../redux/app/actions';
import { LoginStatus } from '../../constants/enums';
import Layout from '../../components/Layout';

interface Props {
  loginStatus: LoginStatus;
}

interface DispatchProps {
  login(): {};
  logout(): {};
  changeRoute(route: string): {};
}

// tslint:disable-next-line:no-any
const mapStateToProps = (state: RootStateType, ownProps: any): Props => {
  return {
    loginStatus: state.app.loginStatus,
    ...ownProps
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
    changeRoute: (payload: string) => dispatch(push(payload))
  };
};

// tslint:disable-next-line:no-any
export const withWrapper = (WrappedComponent: any) => {

  // tslint:disable-next-line:no-any
  class MainHoc extends React.Component<any, never> {

    // tslint:disable-next-line:no-any
    checkAuth(props: any) {
      if (props.location.pathname !== '/'
          && props.loginStatus !== LoginStatus.LOGGED_IN_WITH_TOKEN) {
        props.changeRoute('/');
      }
    }

    componentDidMount() {
      this.checkAuth(this.props);
    }

    componentDidUpdate() {
      this.checkAuth(this.props);
    }

    render() {
      return (
        <Layout
          loginStatus={this.props.loginStatus}
          login={this.props.login}
          logout={this.props.logout}
          changeRoute={this.props.changeRoute}
        >
          <WrappedComponent match={this.props.match} />
        </Layout>
      );
    }

  }

  return connect(mapStateToProps, mapDispatchToProps)(MainHoc);
};
