import {useEffect, useState} from 'react';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import Card from '@site/src/components/Card';
import styles from './index.module.css';

const BACKGROUNDS = [
  '/img/renderman-swatch.jpg',
  '/img/dragon.jpg',
  '/img/dining-room.jpg',
];

const BACKGROUND_SOURCE_URL = 'https://github.com/knightcrawler25/GLSL-PathTracer';

export default function TutorialsOverview() {
  const {siteConfig} = useDocusaurusContext();
  const {withBaseUrl} = useBaseUrlUtils();
  const tutorials = siteConfig.customFields?.tutorials ?? [];
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    setBackgroundIndex(Math.floor(Math.random() * BACKGROUNDS.length));
  }, []);

  return (
    <Layout title="教程总览" description="TDS Graphics 全部教程">
      <main className={styles.page}>
        {BACKGROUNDS.map((src, index) => (
          <img
            key={src}
            className={styles.bg}
            src={withBaseUrl(src)}
            alt=""
            aria-hidden="true"
            loading="eager"
            fetchPriority={index === 0 ? 'high' : 'low'}
            style={index === backgroundIndex ? undefined : {display: 'none'}}
          />
        ))}
        <div className={`container ${styles.inner}`}>
          <header className={styles.header}>
            <Heading as="h1" className={styles.title}>
              教程总览
            </Heading>
            <p className={styles.subtitle}>
              让我们逐步走进游戏图形的底层世界，构建出更完美的游戏。
            </p>
          </header>

          {tutorials.length > 0 ? (
            <div className={styles.grid}>
              {tutorials.map((tutorial) => (
                <Card
                  key={tutorial.name}
                  variant="glass"
                  to={`/tutorials/${tutorial.name}/`}
                  title={tutorial.title}
                  description={tutorial.description}
                  tags={tutorial.tags}
                  cta="进入教程"
                />
              ))}
            </div>
          ) : (
            <p className={styles.empty}>暂时还没有教程，敬请期待。</p>
          )}
        </div>

        <footer className={styles.credit}>
          背景渲染图来自{' '}
          <a href={BACKGROUND_SOURCE_URL} target="_blank" rel="noreferrer">
            GLSL-PathTracer
          </a>
          （MIT License）
        </footer>
      </main>
    </Layout>
  );
}
