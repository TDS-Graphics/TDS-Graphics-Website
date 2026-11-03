import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import MemberAvatar from './Avatar';
import styles from './styles.module.css';

export default function MembersList({members}) {
  return (
    <Layout title="成员" description="认识 TDS Graphics 的成员">
      <main className={`container ${styles.listPage}`}>
        <Heading as="h1" className={styles.listTitle}>成员</Heading>
        <ul className={styles.grid}>
          {members.map((member) => (
            <li key={member.id}>
              <Link className={styles.memberLink} to={member.permalink}>
                <MemberAvatar member={member} />
                <Heading as="h2" className={styles.memberName}>
                  {member.name}
                </Heading>
                {member.title && <p className={styles.memberTitle}>{member.title}</p>}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}
