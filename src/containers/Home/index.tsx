import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Immutable } from 'seamless-immutable';
import * as dateFns from 'date-fns';

import { Dispatch, RootStateType } from '../../constants/types';
import { withWrapper } from '../MainHoc';

import styles from './styles.module.scss';
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

export class Home extends React.Component<Props & DispatchProps> {

  render() {
    return (
      <div className={styles.home_container}>
        <h1>On {dateFns.format(this.props.today.asMutable(), 'DD-MMM-YYYY')}</h1>
        <hr/>
        <form>
          <p>I am thankful for:</p>
          <textarea
            name="thankfulFor"
            onChange={(e) => this.props.changeThankfulFor(e.target.value || '')}
          />
          <p>I learned:</p>
          <textarea
            name="learned"
            onChange={(e) => this.props.changeLearnedToday(e.target.value || '')}
          />
          <p>I stressed out because:</p>
          <textarea
            name="stress"
            onChange={(e) => this.props.changeStressedOut(e.target.value || '')}
          />
          <br/>
          <button type="submit" onClick={(e) => { e.preventDefault(); this.props.submitLog(); }}>Save</button>
        </form>
      </div>
    );
  }

}

export default withWrapper(connect(mapStateToProps, mapDispatchToProps)(Home));
