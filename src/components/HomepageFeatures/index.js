import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {RayTracingIcon, RasterIcon, PhysicsIcon} from './icons';

const FeatureList = [
  {
    title: '光线追踪',
    Icon: RayTracingIcon,
    description: '从光线与表面的相交出发，理解真实感图像如何生成。',
    tags: ['渲染方程', '路径追踪'],
    accent: 'cyan',
    to: '/tutorials/',
  },
  {
    title: '光栅化',
    Icon: RasterIcon,
    description: '走进实时渲染管线，掌握每一帧画面背后的核心过程。',
    tags: ['渲染管线', '着色器'],
    accent: 'yellow',
    to: '/tutorials/',
  },
  {
    title: '物理模拟',
    Icon: PhysicsIcon,
    description: '让物体按规律自己动起来：受力、碰撞与求解器如何决定一帧里的真实感。',
    tags: ['刚体动力学', '流体动力学'],
    accent: 'coral',
    to: '/tutorials/',
  },
];

function Feature({Icon, title, description, tags, accent, status, to}) {
  return (
    <Link className={clsx(styles.feature, styles[accent])} to={to}>
      <div className={styles.iconWrap}>
        <Icon className={styles.featureIcon} />
      </div>
      <div className={styles.featureHead}>
        <Heading as="h3">{title}</Heading>
        {status && <span className={styles.status}>{status}</span>}
      </div>
      <p className={styles.featureDesc}>{description}</p>
      <ul className={styles.tagList}>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <span className={styles.featureCta}>
        查看学习路线 <span aria-hidden="true">→</span>
      </span>
    </Link>
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
