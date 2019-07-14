import * as React from 'react';
import * as styles from '../sass/hero.module.scss';

const Hero: React.FC<any> = () => {
  return (
    <section className="hero">
      <div className="contain">
        <div className="info">
          <h1>React is an ecosystem</h1>
          <p>
            Like all ecosystems, it's constantly evolving. Changelogs are
            updated daily. The seasons are always changing, and the projects are
            too. That requires adaptation and flexibility.
          </p>
          <p>
            The best fit for your project isn't simply someone who stays ahead
            of the curve, but someone who delivers on tight timelines and tough
            budgets.
          </p>
          <p>
            That's why I work from home. Because I understand the ecosystem, but
            I also understand your needs.
          </p>
        </div>
      </div>
      <div className="visual">
        <div className="outerLayer">
          <div className="innerLayer">
            <img src="" alt="" title="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
