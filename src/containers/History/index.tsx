import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Immutable } from 'seamless-immutable';

import { Dispatch, RootStateType } from '../../constants/types';
import { withWrapper } from '../MainHoc';

// import styles from './styles.module.scss';
import {
  changeThankfulFor,
  changeStressedOut,
  changeLearnedToday,
  submitLog
} from '../../redux/logs/actions';

interface Props {
  today: Immutable<Date>;
}

interface DispatchProps {
  changeThankfulFor(payload: string): {};
  changeLearnedToday(payload: string): {};
  changeStressedOut(payload: string): {};
  submitLog(): {};
  changeRoute(route: string): {};
}

const mapStateToProps = (state: RootStateType, _ownProps: {}): Props => {
  return {
    today: state.logs.today.day
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    changeThankfulFor: (payload: string) => dispatch(changeThankfulFor(payload)),
    changeLearnedToday: (payload: string) => dispatch(changeLearnedToday(payload)),
    changeStressedOut: (payload: string) => dispatch(changeStressedOut(payload)),
    submitLog: () => dispatch(submitLog()),
    changeRoute: (payload: string) => dispatch(push(payload))
  };
};

export class History extends React.Component<Props & DispatchProps> {

  render() {
    return (
      <div>
        <h1>History</h1>
      </div>
    );
  }

}

export default withWrapper(connect(mapStateToProps, mapDispatchToProps)(History));
