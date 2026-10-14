import Heading from '@theme/Heading';
import Card from '@site/src/components/Card';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '光线追踪',
    description: '理解光线、材质与光照。',
    tags: ['渲染方程', '路径追踪'],
    accent: 'cyan',
    image: '/img/raytracing.png',
    to: '/tutorials/',
  },
  {
    title: '光栅化',
    description: '从几何体到屏幕像素。',
    tags: ['渲染管线', '着色器'],
    accent: 'yellow',
    image: '/img/raster.png',
    reverse: true,
    to: '/tutorials/',
  },
  {
    title: '物理模拟',
    description: '让物体按规律运动。',
    tags: ['刚体动力学', '流体动力学'],
    accent: 'coral',
    image: '/img/physics.png',
    to: '/tutorials/',
  },
];

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.headingGroup}>
            <Heading as="h2">教程</Heading>
          </div>
        </div>

        <div className={styles.featureGrid}>
          {FeatureList.map((feature) => (
            <Card
              key={feature.title}
              variant="feature"
              cta="进入路线"
              headingLevel="h3"
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
