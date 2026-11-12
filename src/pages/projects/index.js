import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import ProjectCard from '@site/src/components/ProjectCard';
import projects from '@site/src/data/projects.json';
import styles from './index.module.css';

const projectList = Array.isArray(projects) ? projects : [];

export default function ProjectsOverview() {
  const items = projectList.filter(
    (project) => project?.title && project?.url,
  );

  return (
    <Layout title="项目" description="TDS Graphics 的项目与作品">
      <main className={`container ${styles.page}`}>
        <header className={styles.header}>
          <Heading as="h1" className={styles.title}>
            项目
          </Heading>
          <p className={styles.subtitle}>
            我们开发过的一些项目，点击卡片可前往仓库页面。
          </p>
        </header>

        {items.length > 0 ? (
          <div className={styles.grid}>
            {items.map((project, index) => (
              <ProjectCard key={`${project.title}-${index}`} {...project} />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>暂时还没有项目，敬请期待。</p>
        )}
      </main>
    </Layout>
  );
}
