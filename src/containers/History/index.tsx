import * as React from 'react';
import { connect } from 'react-redux';
import * as dateFns from 'date-fns';

import { Dispatch, RootStateType, LogEntry } from '../../constants/types';
import { withWrapper } from '../MainHoc';

import styles from './styles.module.scss';
import LoadingSpinner from '../../components/LoadingSpinner';
import { fetchLogs, addOpenRecord } from '../../redux/logs/actions';

interface Props {
  loading: boolean;
  message: string | null;
  records: LogEntry[];
  openRecords: number[] | null;
}

interface DispatchProps {
  fetchLogs(): {};
  addOpenRecord(payload: number): {};
}

const mapStateToProps = (state: RootStateType, _ownProps: {}): Props => {
  return {
    loading: state.logs.loading,
    message: state.logs.message,
    records: state.logs.records.asMutable(),
    openRecords: state.logs.openRecords
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    fetchLogs: () => dispatch(fetchLogs()),
    addOpenRecord: (payload: number) => dispatch(addOpenRecord(payload))
  };
};

export class History extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    this.props.fetchLogs();
  }

  renderPoints(points: string[]) {
    return (
      <ul>
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    );
  }

  renderDay(record: LogEntry, visible: boolean) {
    return (
      <div className={visible ? styles.day_details : styles.hidden}>
        <div>
          <div className={styles.heading}>Thankful for:</div>
          {this.renderPoints(record.thankfulFor)}
        </div>
        <div>
          <div className={styles.heading}>Learned:</div>
          {this.renderPoints(record.learnedToday)}
        </div>
        <div>
          <div className={styles.heading}>
            Stressed because of:
          </div>
          {this.renderPoints(record.stressedOut)}
        </div>
      </div>
    );
  }

  renderRecord(record: LogEntry, idx: number) {
    return (
      <div key={idx} className={styles.day_card} onClick={() => this.props.addOpenRecord(idx)}>
        <p>{dateFns.format(record.day, 'DD-MMM-YYYY')}</p>
        {this.renderDay(record, !!this.props.openRecords
          && this.props.openRecords.includes(idx))}
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
