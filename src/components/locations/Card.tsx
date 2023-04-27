import styles from '@/styles/locations/card.module.scss';
import dynamic from 'next/dynamic';

interface Props {
  address: {
    title: string;
    line1: string;
    line2: string;
    country: string;
  };
  coords: { lat: number; long: number };
  contact: {
    phone: string;
    email: string;
  };
}

export default function Card(props: Props) {
  const MapWithNoSSR = dynamic(() => import('@/components/locations/Map'), { ssr: false });

  return (
    <div className={styles.card} id={props.address.country.replace(' ', '')}>
      <div className={styles.image} id='map'>
        <MapWithNoSSR address={props.address} coords={props.coords} />
      </div>
      <div className={styles.content}>
        <div className={styles.bg_pattern}></div>
        <h3>{props.address.country}</h3>
        <div className={styles.address}>
          <p>{props.address.title}</p>
          <p>{props.address.line1}</p>
          <p>{props.address.line2}</p>
        </div>
        <div className={styles.contact}>
          <p>Contact</p>
          <p>P : {props.contact.phone}</p>
          <p>M : {props.contact.email}</p>
        </div>
      </div>
    </div>
  );
}
