import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import * as styles from '../sass/header.module.scss';

const Header: React.FC<any> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contain}>
        <div className={styles.logo}>
          {/* <img
            src="/goodmanWordmark.png"
            alt="Alex The Goodman - React Developer"
            title="Alex The Goodman - React Developer"
          /> */}
          <h2>
            <span>Alex The</span>
            <span>Goodman</span>
          </h2>
        </div>
        <div className={styles.navigation}>
          <nav>
            <ul>
              <li>
                <a href="https://www.facebook.com/reactgoodman" target="_blank">
                  React Tips and Links
                </a>
              </li>
              <li>
                <a
                  className={styles.btn}
                  href="mailto:alexthegoodman@gmail.com"
                >
                  Start a Project
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
