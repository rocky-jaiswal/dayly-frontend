import * as React from 'react';
import { connect } from 'react-redux';
import * as dateFns from 'date-fns';

import { Dispatch, RootStateType, LogEntry } from '../../constants/types';
import { withWrapper } from '../MainHoc';

import styles from './styles.module.scss';
import LoadingSpinner from '../../components/LoadingSpinner';
import { fetchLogs } from '../../redux/logs/actions';

interface Props {
  loading: boolean;
  message: string | null;
  records: LogEntry[];
}

interface DispatchProps {
  fetchLogs(): {};
}

const mapStateToProps = (state: RootStateType, _ownProps: {}): Props => {
  return {
    loading: state.logs.loading,
    message: state.logs.message,
    records: state.logs.records.asMutable()
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    fetchLogs: () => dispatch(fetchLogs())
  };
};

export class History extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    this.props.fetchLogs();
  }

  renderRecord(record: LogEntry, idx: number) {
    return (
      <div key={idx}>
        <h3>{dateFns.format(record.day, 'DD-MMM-YYYY')}</h3>
        <div className={styles.day_card}>
          <p><span className={styles.heading}>Thankful for:</span> {record.thankfulFor}</p>
          <p><span className={styles.heading}>Learned:</span> {record.learnedToday}</p>
          <p><span className={styles.heading}>Stressed because of:</span> {record.stressedOut}</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>History</h1>
        <hr/>
        {this.props.message &&
          <div className={styles.message}>
            <p>{this.props.message}</p>
          </div>
        }
        <LoadingSpinner visible={this.props.loading} />
        {this.props.records.map((r, i) => this.renderRecord(r, i))}
      </div>
    );
  }

}

export default withWrapper(connect(mapStateToProps, mapDispatchToProps)(History));
