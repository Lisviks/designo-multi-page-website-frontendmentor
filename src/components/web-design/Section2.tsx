import LinkCard from '../shared/LinkCard';
import styles from '@/styles/web-design/section2.module.scss';

export default function Section2() {
  return (
    <section className={styles.section}>
      <LinkCard title='App Design' link='app-design' />
      <LinkCard title='Graphic Design' link='graphic-design' />
    </section>
  );
}
