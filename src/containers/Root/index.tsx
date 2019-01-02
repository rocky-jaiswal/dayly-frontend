import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Dispatch, RootStateType } from '../../constants/types';
import { LoginStatus } from '../../constants/enums';
import { fetchToken } from '../../redux/app/actions';
import { withWrapper } from '../MainHoc';

import styles from './styles.module.scss';

interface Props {
  loginStatus: LoginStatus;
  loading: boolean;
}

interface DispatchProps {
  changeRoute(route: string): {};
  fetchToken(): {};
}

const mapStateToProps = (state: RootStateType, _ownProps: {}): Props => {
  return {
    loginStatus: state.app.loginStatus,
    loading: state.app.loading
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    fetchToken: () => dispatch(fetchToken()),
    changeRoute: (payload: string) => dispatch(push(payload))
  };
};

const WelcomeMessage = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1><FormattedMessage id="app.welcome" /></h1>
      <hr/>
      <h2>Please login</h2>
    </div>
  );
};

export class Root extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    if (this.props.loginStatus === LoginStatus.LOGGED_IN) {
      this.props.fetchToken();
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.loginStatus !== this.props.loginStatus && this.props.loginStatus === LoginStatus.LOGGED_IN) {
      this.props.fetchToken();
    }
  }

  render() {
    return <WelcomeMessage {...this.props} />;
  }

}

export default withWrapper(connect(mapStateToProps, mapDispatchToProps)(Root));
