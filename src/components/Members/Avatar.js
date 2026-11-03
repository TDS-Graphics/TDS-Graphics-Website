import {useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function MemberAvatar({member}) {
  const imageUrl = useBaseUrl(member.image_url ?? '');
  const [failedUrl, setFailedUrl] = useState(null);
  const alt = `${member.name}的头像`;

  return (
    <span className={styles.avatar}>
      {member.image_url && failedUrl !== imageUrl ? (
        <img
          src={imageUrl}
          alt={alt}
          width="144"
          height="144"
          loading="lazy"
          onError={() => setFailedUrl(imageUrl)}
        />
      ) : (
        <span className={styles.initials} role="img" aria-label={alt}>
          {Array.from(member.name).slice(0, 2).join('').toUpperCase()}
        </span>
      )}
    </span>
  );
}
