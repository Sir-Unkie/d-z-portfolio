import React from 'react';
import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}></div>
    </div>
  );
};

export default Spinner;
