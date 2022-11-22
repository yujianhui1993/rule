import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '为什么需要规范',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        规范是为了高效解决成员之间的沟通问题，有助于自身成长，提高团队和谐。
      </>
    ),
  },
  {
    title: '快捷方法',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        整理提供一些常用的JS快捷方法，没有哪个程序员能够记住所有，提供以便参考。<a href='https://wangchujiang.com/reference/'>此地址更加齐全</a>
      </>
    ),
  },
  {
    title: '未完待续...',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        后续新增模块
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
