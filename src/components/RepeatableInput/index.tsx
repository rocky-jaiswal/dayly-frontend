import * as React from 'react';

import styles from './styles.module.scss';

interface Props {
  name: string;
  entries: string[];
  addLine(payload: string): {};
  changeHandler(payload: { val: string, idx: number }): {};
}

const RepeatableInput = (props: Props) => {
  return (
    <div>
      {props.entries.map((entry: string, idx: number) => (
        <div className={styles.container} key={idx}>
          <input
            type="text"
            maxLength={150}
            name={props.name}
            onChange={(e) => {
              e.preventDefault();
              props.changeHandler({ val: e.target.value || '', idx });
            }}
          />
          <button onClick={(e) => {e.preventDefault(); props.addLine(props.name); }}>+</button>
        </div>
      ))}
    </div>
  );
};

export default RepeatableInput;
