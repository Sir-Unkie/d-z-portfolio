import React from 'react';
import styles from './ContactPage.module.scss';
import MyHeading from '../../Components/MyHeading/MyHeading';
import ContactButton from '../../Components/ContactButton/ContactButton';
import CustomForm from '../../Components/CustomForm/CustomForm';

const ContactPage = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.contactPage}>
        <MyHeading>Contact me</MyHeading>
        <div className={styles.contactMeContainer}>
          <div className={styles.leftArea}>
            <h2>Have any questions or an interesting project towork on?</h2>
            <p className={styles.paragraph}>
              I'd love to hear from you!<br></br>
              Just fill up the form or send an email at&nbsp;
              <a
                href='mailto:zhidovlenkovDI@gmail.com'
                className={styles.colored}
              >
                ZhidovlenkovDI@gmail.com
              </a>
            </p>
            <CustomForm></CustomForm>
          </div>
          <div className={styles.rightArea}>
            <div className={styles.github}>
              <ContactButton icon='GitHub'></ContactButton>
            </div>
            <div className={styles.mail}>
              <ContactButton icon='mail'></ContactButton>
            </div>
            <div className={styles.whatsapp}>
              <ContactButton icon='WhatsApp'></ContactButton>
            </div>
            <div className={styles.telegram}>
              <ContactButton icon='Telegram'></ContactButton>
            </div>
            <div className={styles.linkedIn}>
              <ContactButton icon='LinkedIn'></ContactButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
