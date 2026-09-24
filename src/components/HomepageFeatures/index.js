import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    number: '01',
    title: '光线追踪',
    description: '理解光线、材质与光照。',
    tags: ['渲染方程', '路径追踪'],
    accent: 'cyan',
    image: '/img/raytracing.png',
    to: '/tutorials/',
  },
  {
    number: '02',
    title: '光栅化',
    description: '从几何体到屏幕像素。',
    tags: ['渲染管线', '着色器'],
    accent: 'yellow',
    image: '/img/raster.png',
    to: '/tutorials/',
  },
  {
    number: '03',
    title: '物理模拟',
    description: '让物体按规律运动。',
    tags: ['刚体动力学', '流体动力学'],
    accent: 'coral',
    image: '/img/physics.png',
    to: '/tutorials/',
  },
];

function FeatureScene({src}) {
  return (
    <div className={styles.featureVisual} aria-hidden="true">
      <img src={useBaseUrl(src)} alt="" loading="lazy" />
    </div>
  );
}

function Feature({number, title, description, tags, accent, image, to}) {
  return (
    <Link className={clsx(styles.feature, styles[accent], number === '02' && styles.featureReverse)} to={to}>
      <div className={styles.featureContent}>
        <div className={styles.featureTop}>
          <span className={styles.featureNumber}>{number}</span>
        </div>

        <div className={styles.featureBody}>
          <Heading as="h3">{title}</Heading>
          <p className={styles.featureDesc}>{description}</p>
        </div>

        <div className={styles.featureBottom}>
          <ul className={styles.tagList}>
            {tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
          <span className={styles.featureCta}>
            进入路线 <span className={styles.arrow} aria-hidden="true">↗</span>
          </span>
        </div>
      </div>
      <FeatureScene src={image} />
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionTopline}>
          <span className={styles.signal}><span aria-hidden="true" /> CURRICULUM</span>
        </div>

        <div className={styles.sectionHeader}>
          <div className={styles.headingGroup}>
            <p className={styles.kicker}>LEARNING PATH</p>
            <Heading as="h2">图形学学习路线</Heading>
          </div>
          <div className={styles.headerAside}>
            <Link className={styles.textLink} to="/tutorials/">
              查看全部教程 <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className={styles.featureGrid}>
          {FeatureList.map((props) => <Feature key={props.number} {...props} />)}
        </div>
      </div>
    </section>
  );
}
