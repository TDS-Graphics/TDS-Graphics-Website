import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import MDXContent from '@theme/MDXContent';
import MemberAvatar from './Avatar';
import styles from './styles.module.css';

export default function MemberProfile({member, content: Content}) {
  return (
    <Layout title={member.name} description={`${member.name} · TDS Graphics 成员介绍`}>
      <main className={`container ${styles.profilePage}`}>
        <Link className={styles.backLink} to="/members/">← 全部成员</Link>
        <header className={styles.profileHeader}>
          <MemberAvatar member={member} />
          <div className={styles.profileInfo}>
            <Heading as="h1" className={styles.profileName}>{member.name}</Heading>
            {member.title && <p className={styles.profileTitle}>{member.title}</p>}
            {member.links.length > 0 && (
              <ul className={styles.links} aria-label="个人链接">
                {member.links.map(({label, href}) => (
                  <li key={label}><Link href={href}>{label}</Link></li>
                ))}
              </ul>
            )}
          </div>
        </header>
        <article className={`markdown ${styles.bio}`}>
          {Content ? (
            <MDXContent><Content /></MDXContent>
          ) : (
            <p className={styles.empty}>这位成员还没有填写个人介绍。</p>
          )}
        </article>
      </main>
    </Layout>
  );
}
