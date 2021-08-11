import React from 'react';
import styles from './CustomForm.module.scss';
import { useState } from 'react';

const CustomForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const emailChangeHandler = e => {
    setEmail(e.target.value);
  };

  return (
    <form className={styles.contactForm}>
      <div className={styles.formContainer}>
        <div className={styles.formGroup}>
          <input
            value={email}
            type='email'
            id='email'
            onChange={emailChangeHandler}
            required
          />
          <label
            className={
              email === ''
                ? `${styles.labelEmail}`
                : `${styles.labelEmail} ${styles.shrinked}`
            }
            htmlFor='email'
          >
            Your email
          </label>
        </div>
        <div className={styles.formGroup}>
          <textarea id='message'></textarea>
          <label
            htmlFor='message'
            className={
              message === ''
                ? `${styles.labelTextArea}`
                : `${styles.labelTextArea}${styles.shrinked}`
            }
          >
            Your message...
          </label>
        </div>
        <div className={styles.formGroup}>
          <button className={styles.btn}>Send</button>
        </div>
      </div>
    </form>
  );
};

export default CustomForm;
