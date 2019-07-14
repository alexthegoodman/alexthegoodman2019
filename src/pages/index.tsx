import { graphql } from 'gatsby';
import * as React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Navigator from '../components/Navigator';
import PortfolioItem from '../components/PortfolioItem';
import QualificationItem from '../components/QualificationItem';
import * as styles from '../sass/index.module.scss';

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`;

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const { name, tagline } = data.site.siteMetadata;

  return (
    <>
      <Header />
      <Hero />
      <Navigator />
      <section className="portfolio">
        <div className="contain">
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
        </div>
      </section>
      <section className="qualifications">
        <div className="contain">
          <QualificationItem />
          <QualificationItem />
          <QualificationItem />
          <QualificationItem />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default IndexPage;
