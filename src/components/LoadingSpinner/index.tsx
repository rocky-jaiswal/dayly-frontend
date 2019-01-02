import * as React from 'react';

import styles from './styles.module.scss';

interface Props {
  visible: boolean;
}

const LoadingSpinner = (props: Props) => {
    return (
      <div className={props.visible ? styles.spinnerWrapper : styles.hidden}>
        <div className={styles.spinner} />
      </div>
    );
};

export default LoadingSpinner;
