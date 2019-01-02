import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Dispatch, RootStateType } from '../../constants/types';
import { withWrapper } from '../MainHoc';

interface Props {
}

interface DispatchProps {
  changeRoute(route: string): {};
}

const mapStateToProps = (state: RootStateType, _ownProps: {}): Props => {
  return {
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    changeRoute: (payload: string) => dispatch(push(payload))
  };
};

export class Home extends React.Component<Props & DispatchProps> {

  render() {
    return (
      <h1>Home</h1>
    );
  }

}

export default withWrapper(connect(mapStateToProps, mapDispatchToProps)(Home));
