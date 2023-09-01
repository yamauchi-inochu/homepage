import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '地理教育',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        地図、GIS（地理情報システム）を活用した自然地理学、地形学、防災などの教育について研究しています。
      </>
    ),
  },
  {
    title: 'GISc教育',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        地理情報科学、GISの活用法の教育について研究しています。
      </>
    ),
  },
  {
    title: '地理情報の応用',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        3Dプリンタ、VR、ドローン映像などを活用して地理・GIS教育に応用する手法について研究しています。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
