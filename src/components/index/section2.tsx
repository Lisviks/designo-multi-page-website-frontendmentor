import styles from '@/styles/index/section2.module.scss';
import PassionateSvg from './passionateSvg';
import ResourcefulSvg from './resourcefulSvg';
import FriendlySvg from './friendlySvg';

export default function Section2() {
  return (
    <section className={styles.section}>
      <div>
        <div className={styles.illustration}>
          <div className={styles.circle}></div>
          <PassionateSvg />
        </div>
        <h3>Passionate</h3>
        <p>
          Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We
          merge art, design, and technology into exciting new solutions.
        </p>
      </div>
      <div>
        <div className={styles.illustration}>
          <div className={styles.circle}></div>
          <ResourcefulSvg />
        </div>
        <h3>Resourceful</h3>
        <p>
          Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value
          customer collaboration. It guarantees superior results that fulfill our clients’ needs.
        </p>
      </div>
      <div>
        <div className={styles.illustration}>
          <div className={styles.circle}></div>
          <FriendlySvg />
        </div>
        <h3>Friendly</h3>
        <p>
          We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers,
          and we strive to give them the best experience a company can provide.
        </p>
      </div>
    </section>
  );
}
