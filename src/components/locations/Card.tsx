import styles from '@/styles/locations/card.module.scss';
import { StaticImageData } from 'next/image';

interface Address {
  line1: string;
  line2: string;
  line3: string;
}

interface Contact {
  line1: string;
  line2: string;
}

interface Props {
  title: string;
  address: Address;
  contact: Contact;
  images: StaticImageData[];
}

export default function Card(props: Props) {
  return (
    <div className={styles.card}>
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
        <div className={styles.address}>
          <p>{props.address.line1}</p>
          <p>{props.address.line2}</p>
          <p>{props.address.line3}</p>
        </div>
        <div className={styles.contact}>
          <p>Contact</p>
          <p>{props.contact.line1}</p>
          <p>{props.contact.line2}</p>
        </div>
      </div>
    </div>
  );
}
