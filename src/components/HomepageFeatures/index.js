import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '光线追踪',
    Svg: require('@site/static/img/light-bulb-svgrepo-com.svg').default,
    description: (
      <>
        计算机图形学的圣杯
      </>
    ),
  },
  {
    title: '光栅化',
    Svg: require('@site/static/img/television-svgrepo-com.svg').default,
    description: (
      <>
        我无处不在
      </>
    ),
  },
  {
    title: '并行计算',
    Svg: require('@site/static/img/numpy-svgrepo-com.svg').default,
    description: (
      <>
        CUDA非常粗大
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
        <Heading as="h3">{title}</Heading>
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
