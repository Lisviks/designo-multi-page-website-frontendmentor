import Card from '../shared/Card';
import cardsData from './cardsData';
import styles from '@/styles/web-design/section1.module.scss';

export default function Section1() {
  return (
    <section className={styles.section}>
      {cardsData.map((data) => {
        return <Card key={data.title} image={data.image} title={data.title} text={data.text} />;
      })}
    </section>
  );
}
