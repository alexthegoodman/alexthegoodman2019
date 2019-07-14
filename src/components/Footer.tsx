import * as React from 'react';
import * as styles from '../sass/footer.module.scss';

const Footer: React.FC<any> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.cta}>
        <div className={styles.left}>
          <div className={styles.resumeInfo}>
            <h5>Looking for a resume?</h5>
            <a href="/resume.pdf" download={true}>
              Download Resume
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.contactInfo}>
            <a href="tel:6163255407">616-325-5407</a>
            <a href="mailto:alexthegoodman@gmail.com">
              alexthegoodman@gmail.como
            </a>
          </div>
        </div>
      </div>
      <div className={styles.finePrint}>
        <div className={styles.contain}>
          <span>&copy; 2019 AlexTheGoodman </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
