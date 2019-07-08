import { graphql } from 'gatsby';
import * as React from 'react';
import * as styles from './Index.module.scss';

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

const IndexPage: React.FC<IndexPageProps> = ({
  data,
}) => {
  const {
    name,
    tagline,
  } = data.site.siteMetadata;

  return (
    <div className={styles.Container}>
        <h1>{name}</h1>
        <p>{tagline}</p>
      </div>
  );
};

export default IndexPage;
