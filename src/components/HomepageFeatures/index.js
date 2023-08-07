import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '使用Git访问仓库',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        右上角的“Git”将会跳转到仓库。需要注册和KLM内网，可以在仓库中上传和下载文档和代码（单个文件大小限制为2GB，暂时可以同时上传15个文件，如果有更多的需求就联系我）。
      </>
    ),
  },
  {
    title: '使用Turtorial查看使用说明',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        理论上来说这里应该放一些可供初学者查阅的资料，欢迎建设！如有非服务器编辑的需求，需要我在GitHub上添加协作者。
      </>
    ),
  },
  {
    title: '使用Blog上传Blog',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        总之就是Blog，放一些日常的实验室动态信息，编辑方面和Turtorial一样。还有这仨图标如果有有兴趣的朋友们帮我找下合适的图哈谢谢。
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
