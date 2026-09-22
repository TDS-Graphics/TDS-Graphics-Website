import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <img
        className={styles.heroBg}
        src={useBaseUrl('/img/sponza.jpg')}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
      />
      <div className={`container ${styles.heroInner}`}>
        <img
          className={styles.heroLogo}
          src={useBaseUrl('/img/logo.png')}
          alt="TDS Graphics"
        />
        <p className={styles.eyebrow}>TDS 游戏开发协会 · 图形组</p>
        <Heading as="h1" className={styles.heroTitle}>TDS Graphics</Heading>
        <p className={styles.heroSubtitle}>
          探究支撑游戏世界的原理，并亲手把它们实现出来。
        </p>
        <div className={styles.heroActions}>
          <Link
            className={`button button--primary button--lg ${styles.primaryAction}`}
            to="/docs/intro">
            浏览文档
          </Link>
          <Link
            className={`button button--outline button--secondary button--lg ${styles.secondaryAction}`}
            to="/tutorials/">
            开始教程
          </Link>
        </div>
        <div className={styles.heroMeta} aria-label="站点内容概览">
          <span>系统路线</span>
          <span>阶段任务</span>
          <span>图形实践</span>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="TDS Graphics 计算机图形学文档、教程与实践记录">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
