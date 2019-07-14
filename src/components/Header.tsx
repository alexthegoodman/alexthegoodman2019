import * as React from 'react';
import * as styles from '../sass/header.module.scss';

const Header: React.FC<any> = () => {
  return (
    <header className="header">
      <div className="contain">
        <div className="logo">
          <img
            src="/goodmanWordmark.png"
            alt="Alex The Goodman - React Developer"
            title="Alex The Goodman - React Developer"
          />
        </div>
        <div className="navigation">
          <nav>
            <ul>
              <li>
                <a href="https://www.facebook.com/reactgoodman" target="_blank">
                  React Tips and Links
                </a>
              </li>
              <li>
                <a className="btn">Start a Project</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
