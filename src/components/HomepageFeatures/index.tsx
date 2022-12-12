import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  Png?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Png: require('@site/static/img/pitch.png').default,
    description: (
      <>
       RabonaJS is inspired by Leaflet syntax, everything is a layer and you can add/remove layers as you wish.
      </>
    ),
  },
  {
    title: 'Tutorial First',
    Png: require('@site/static/img/rabona.png').default,
    description: (
      <>
        Tutorial series to get you started in soccer analytics alongside with the library.
      </>
    ),
  },
  {
    title: 'Powered by D3',
    Png: require('@site/static/img/d3.png').default,
    description: (
      <>
        SVG based drawings are powered by D3.
      </>
    ),
  },
];

function Feature({title, Svg, description, Png}: FeatureItem) {
  console.log(Png)
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      {Svg && <Svg className={styles.featureSvg} role="img" />}
      {Png && <img className={styles.featureSvg} role="img" src={Png} />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
