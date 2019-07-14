import * as React from 'react';
import * as styles from '../sass/portfolioItem.module.scss';

const PortfolioItem: React.FC<any> = ({ item }) => {
  return (
    <section className={styles.portfolioItem}>
      <div className={styles.itemContain}>
        <div className={styles.visual}>
          <img src={item.image} alt="" title="" />
        </div>
        <div className={styles.info}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className={styles.badges}>
            {item.badges.map((badge: any, i: number) => {
              return <span key={i}>{badge}</span>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioItem;
