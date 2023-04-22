import styles from '@/styles/index/section1.module.scss';
import Card from './Card';

export default function Section1() {
  return (
    <section className={styles.section}>
      <Card title='Web Design' link='web-design' />
      <Card title='App Design' link='#' />
      <Card title='Graphic Design' link='#' />
    </section>
  );
}
