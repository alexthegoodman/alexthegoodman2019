import * as React from 'react';
import * as styles from '../sass/footer.module.scss';

const Footer: React.FC<any> = () => {
  return (
    <footer>
      <div className="cta">
        <div className="left" />
        <div className="right">
          <div className="contactInfo" />
        </div>
      </div>
      <div className="finePrint" />
    </footer>
  );
};

export default Footer;
