import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '光线追踪',
    Svg: require('@site/static/img/light-bulb-svgrepo-com.svg').default,
    description: '从光线与表面的相交出发，理解真实感图像如何生成。',
    accent: 'cyan',
  },
  {
    title: '光栅化',
    Svg: require('@site/static/img/television-svgrepo-com.svg').default,
    description: '走进实时渲染管线，掌握每一帧画面背后的核心过程。',
    accent: 'yellow',
  }
];

function Feature({Svg, title, description, accent}) {
  return (
    <article className={clsx(styles.feature, styles[accent])}>
      <div className={styles.iconWrap}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.kicker}>LEARNING PATH</p>
            <Heading as="h2">从概念到一帧画面</Heading>
          </div>
          <Link className={styles.textLink} to="/tutorials/">
            查看完整学习路线 <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className={styles.featureGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
