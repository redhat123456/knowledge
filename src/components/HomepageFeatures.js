import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '前端',
    Svg: require('../../static/img/react.png').default,
    description: (
      <>
        本知识库涉及大部分前端知识（包括Vue、React、微信小程序）主要是这三大块的知识以及应用
      </>
    ),
  },
  {
    title: '算法',
    Svg: require('../../static/img/acm.png').default,
    description: (
      <>
       本知识库涉及一些算法知识，包括我们平时用到的五大算法以及一些经验和技巧
      </>
    ),
  },
  {
    title: '人工智能',
    Svg: require('../../static/img/python.png').default,
    description: (
      <>
        本知识库设计一些人工智能，大概是一些基础的内容，大家可以自由欣赏
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={Svg}/>
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
