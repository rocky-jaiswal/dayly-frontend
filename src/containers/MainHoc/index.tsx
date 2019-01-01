import * as React from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import { RootStateType, Dispatch } from '../../constants/types';
import { login, logout } from '../../redux/app/actions';
import { LoginStatus } from '../../constants/enums';

interface Props {
  loginStatus: LoginStatus;
}

interface DispatchProps {
  login(): {};
  logout(): {};
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
    logout: () => dispatch(logout())
  };
};

// tslint:disable-next-line:no-any
export const withWrapper = (WrappedComponent: any) => {

  // tslint:disable-next-line:no-any
  class MainHoc extends React.Component<any, never> {

    render() {
      return (
        <Layout loginStatus={this.props.loginStatus} login={this.props.login} logout={this.props.logout}>
          <WrappedComponent match={this.props.match} />
        </Layout>
      );
    }

  }

  return connect(mapStateToProps, mapDispatchToProps)(MainHoc);
};
