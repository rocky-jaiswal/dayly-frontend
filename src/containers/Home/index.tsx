import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Immutable } from 'seamless-immutable';
import * as dateFns from 'date-fns';

import { Dispatch, RootStateType, LogEntry } from '../../constants/types';
import { withWrapper } from '../MainHoc';

import styles from './styles.module.scss';
import {
  changeThankfulFor,
  changeStressedOut,
  changeLearnedToday,
  submitLog,
  addLine
} from '../../redux/logs/actions';
import LoadingSpinner from '../../components/LoadingSpinner';
import RepeatableInput from '../../components/RepeatableInput';

interface Props {
  loading: boolean;
  message: string | null;
  today: Immutable<LogEntry>;
}

interface DispatchProps {
  changeThankfulFor(payload: { val: string, idx: number }): {};
  changeLearnedToday(payload: { val: string, idx: number }): {};
  changeStressedOut(payload: { val: string, idx: number }): {};
  addLine(payload: string): {};
  submitLog(): {};
  changeRoute(route: string): {};
}

const mapStateToProps = (state: RootStateType, _ownProps: {}): Props => {
  return {
    loading: state.logs.loading,
    message: state.logs.message,
    today: state.logs.today
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    changeThankfulFor: (payload: { val: string, idx: number }) => dispatch(changeThankfulFor(payload)),
    changeLearnedToday: (payload: { val: string, idx: number }) => dispatch(changeLearnedToday(payload)),
    changeStressedOut: (payload: { val: string, idx: number }) => dispatch(changeStressedOut(payload)),
    addLine: (payload: string) => dispatch(addLine(payload)),
    submitLog: () => dispatch(submitLog()),
    changeRoute: (payload: string) => dispatch(push(payload))
  };
};

export class Home extends React.Component<Props & DispatchProps> {

  render() {
    return (
      <div className={styles.home_container}>
        <h1>On {dateFns.format(this.props.today.day.asMutable(), 'DD-MMM-YYYY')}</h1>
        <hr/>
        {this.props.message &&
          <div className={styles.message}>
            <p>{this.props.message}</p>
          </div>
        }
        <form>
          <p>I am thankful for:</p>
          <RepeatableInput
            name="thankfulFor"
            entries={this.props.today.thankfulFor}
            addLine={this.props.addLine}
            changeHandler={this.props.changeThankfulFor}
          />
          <p>I learned:</p>
          <RepeatableInput
            name="learnedToday"
            entries={this.props.today.learnedToday}
            addLine={this.props.addLine}
            changeHandler={this.props.changeLearnedToday}
          />
          <p>I stressed out because:</p>
          <RepeatableInput
            name="stressedOut"
            entries={this.props.today.stressedOut}
            addLine={this.props.addLine}
            changeHandler={this.props.changeStressedOut}
          />
          <br/>
          <LoadingSpinner visible={this.props.loading} />
          <button
            disabled={this.props.loading}
            type="submit"
            onClick={(e) => { e.preventDefault(); this.props.submitLog(); }}
          >
            Save
          </button>
        </form>
      </div>
    );
  }

}

export default withWrapper(connect(mapStateToProps, mapDispatchToProps)(Home));
