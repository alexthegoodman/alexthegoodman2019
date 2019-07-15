import * as React from 'react';
// import ReactMapGL from 'react-map-gl';
import { StaticMap } from 'react-map-gl';
import * as styles from '../sass/hero.module.scss';

const Hero: React.FC<any> = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.contain}>
        <div className={styles.info}>
          <h1>
            React is
            <br />
            an ecosystem
          </h1>
          <p>
            The best fit for your project isn't simply someone who stays ahead
            of the curve, but someone who delivers on tight timelines and tough
            budgets.
          </p>
          <p>
            That's why I work from home. Because I understand the JavaScript
            world, but I also understand your needs.
          </p>
        </div>
      </div>
      <div className={styles.visual}>
        <div className={styles.outerLayer}>
          <div className={styles.innerLayer}>
            <StaticMap
              mapboxApiAccessToken={
                'pk.eyJ1IjoiYWxleHRoZWdvb2RtYW4iLCJhIjoiY2p5MzFpNjVwMHVtbTNtbWJxZGowaGMzaSJ9.yEJBVWS3cRBapCzZS7rI1g'
              }
              mapStyle="mapbox://styles/alexthegoodman/cj5vd7ow71g2e2rs18oiquskx"
              width={1200}
              height={800}
              latitude={42.956273}
              longitude={-85.8001727}
              zoom={11}
            />
          </div>
        </div>
        <video
          autoPlay={true}
          className="mediaVideo"
          id="model1"
          loop={true}
          muted={true}
          preload="auto"
        >
          <source src="/video/iphoneSideTrans_2.webm" type="video/webm" />
        </video>
      </div>
      <svg height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="curve1" transform="translate(0 1)">
            <path
              className="cls-1"
              d="M365.5,711.5c22.95,24.35,54.46,37.12,97,43,202.15,27.93,387-96,387-96a815.15,815.15,0,0,0,77.19-61,814.2,814.2,0,0,0,96.81-103q.25-247.24.5-494.5L248.5-.5c-35.79,47.28-71.07,111-54,171,24.54,86.29,131.86,75,164,163,32.23,88.29-51.23,166.06-28,301C334.17,655.8,341.58,686.11,365.5,711.5Z"
            />
          </clipPath>
        </defs>
      </svg>
      <svg height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="curve2" transform="translate(0 1)">
            <path
              className="cls-1"
              d="M365.5,711.5c22.95,24.35,54.46,37.12,97,43,202.15,27.93,387-96,387-96a815.15,815.15,0,0,0,77.19-61,814.2,814.2,0,0,0,96.81-103q.25-247.24.5-494.5L248.5-.5c-35.79,47.28-71.07,111-54,171,24.54,86.29,131.86,75,164,163,32.23,88.29-51.23,166.06-28,301C334.17,655.8,341.58,686.11,365.5,711.5Z"
            />
          </clipPath>
        </defs>
      </svg>
    </section>
  );
};

export default Hero;
