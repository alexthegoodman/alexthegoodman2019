import * as React from 'react';
import * as styles from '../sass/portfolioItem.module.scss';

const PortfolioItem: React.FC<any> = () => {
  return (
    <section className="portfolioItem">
      <div className="itemContain">
        <div className="visual">
          <img src="" alt="" title="" />
        </div>
        <div className="info">
          <h2>Portfolio Piece</h2>
          <p>Some info regarding the piece</p>
          <em>Date Completed: 10/19/19</em>
          <div className="badges">
            <span>React</span>
            <span>TypeScript</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioItem;
