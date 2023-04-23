import styles from '@/styles/about/card.module.scss';
import { StaticImageData } from 'next/image';

interface Props {
  title: string;
  text1: string;
  text2: string;
  images: StaticImageData[];
  cardName: string;
}

export default function Card(props: Props) {
  return (
    <div className={props.cardName === 'worldClass' ? styles.worldClassCard : styles.realDealCard}>
      <div className={styles.image}>
        <picture>
          <source media='(min-width: 1000px)' srcSet={props.images[0].src} />
          <source media='(min-width: 768px)' srcSet={props.images[1].src} />
          <img src={props.images[2].src} alt={`${props.title} image`} />
        </picture>
      </div>
      <div className={styles.content}>
        <div className={styles.bg_pattern}></div>
        <h3>{props.title}</h3>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
      </div>
    </div>
  );
}
