import styles from '@/styles/index/section1.module.scss';
import LinkCard from '../shared/LinkCard';

export default function Section1() {
  return (
    <section className={styles.section}>
      <LinkCard title='Web Design' link='web-design' class='web' />
      <LinkCard title='App Design' link='app-design' class='app' />
      <LinkCard title='Graphic Design' link='graphic-design' class='graphic' />
    </section>
  );
}
