import { StaticImageData } from 'next/image';
import Card from '../Card';
import styles from '@/styles/shared/design-pages/section1.module.scss';

interface CardData {
  title: string;
  text: string;
  image: StaticImageData;
}

interface Props {
  cardsData: CardData[];
}

export default function Section1({ cardsData }: Props) {
  return (
    <section className={styles.section}>
      {cardsData.map((data) => {
        return <Card key={data.title} image={data.image} title={data.title} text={data.text} />;
      })}
    </section>
  );
}
