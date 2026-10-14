import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function Card({
  variant = 'glass',
  to,
  title,
  description,
  tags = [],
  cta = '进入教程',
  headingLevel,
  accent,
  image,
  reverse = false,
}) {
  const imageUrl = useBaseUrl(image ?? '');
  const headingTag = headingLevel ?? (variant === 'feature' ? 'h3' : 'h2');

  if (variant === 'feature') {
    return (
      <Link
        className={clsx(
          styles.feature,
          accent && styles[accent],
          reverse && styles.featureReverse,
        )}
        to={to}>
        <div className={styles.featureContent}>
          <div className={styles.featureBody}>
            <Heading as={headingTag}>{title}</Heading>
            {description && <p className={styles.featureDesc}>{description}</p>}
          </div>

          <div className={styles.featureBottom}>
            {tags.length > 0 && (
              <ul className={styles.tagList}>
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            )}
            <span className={styles.featureCta}>
              {cta} <span className={styles.arrow} aria-hidden="true">↗</span>
            </span>
          </div>
        </div>

        {image && (
          <div className={styles.featureVisual} aria-hidden="true">
            <img src={imageUrl} alt="" loading="lazy" />
          </div>
        )}
      </Link>
    );
  }

  return (
    <Link className={styles.card} to={to}>
      <Heading as={headingTag} className={styles.cardTitle}>
        {title}
      </Heading>
      {description && <p className={styles.cardDesc}>{description}</p>}
      {tags.length > 0 && (
        <ul className={styles.tagList}>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
      <span className={styles.cardCta}>
        {cta} <span className={styles.arrow} aria-hidden="true">↗</span>
      </span>
    </Link>
  );
}
