import * as React from 'react';
import * as styles from '../sass/qualificationItem.module.scss';

const QualificationItem: React.FC<any> = () => {
  return (
    <section className="qualificationItem">
      <div className="itemContain">
        <h3>Category Title</h3>
        <ol>
          <li>
            <strong>Qualification</strong>
            <span>Some additional details</span>
          </li>
          <li>
            <strong>Qualification</strong>
            <span>Some additional details</span>
          </li>
          <li>
            <strong>Qualification</strong>
            <span>Some additional details</span>
          </li>
          <li>
            <strong>Qualification</strong>
            <span>Some additional details</span>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default QualificationItem;
