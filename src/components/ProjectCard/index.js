import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function getInitial(title) {
  return Array.from(title.trim())[0] ?? '·';
}

export default function ProjectCard({title, description, url, image}) {
  const imageUrl = useBaseUrl(image ?? '');

  return (
    <a
      className={styles.card}
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label={`${title}（在新标签页打开）`}>
      <div className={styles.media}>
        {image ? (
          <img className={styles.image} src={imageUrl} alt="" loading="lazy" />
        ) : (
          <span className={styles.initial} aria-hidden="true">
            {getInitial(title)}
          </span>
        )}
      </div>
      <div className={styles.body}>
        <Heading as="h2" className={styles.title}>
          {title}
        </Heading>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </a>
  );
}
