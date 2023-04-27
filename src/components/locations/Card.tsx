import styles from '@/styles/locations/card.module.scss';
import dynamic from 'next/dynamic';

interface Address {
  line1: string;
  line2: string;
  line3: string;
  coords: { lat: number; long: number };
}

interface Contact {
  line1: string;
  line2: string;
}

interface Props {
  title: string;
  address: Address;
  contact: Contact;
}

export default function Card(props: Props) {
  const MapWithNoSSR = dynamic(() => import('@/components/locations/Map'), { ssr: false });

  return (
    <div className={styles.card}>
      <div className={styles.image} id='map'>
        <MapWithNoSSR {...props.address} />
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
