import canada from '@/../public/assets/shared/desktop/illustration-canada.svg';
import australia from '@/../public/assets/shared/desktop/illustration-australia.svg';
import unitedKingdom from '@/../public/assets/shared/desktop/illustration-united-kingdom.svg';
import Image from 'next/image';
import styles from '@/styles/shared/locationSection.module.scss';
import Link from 'next/link';

export default function LocationSection() {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        <li>
          <div className={styles.image}>
            <div className={styles.circle}></div>
            <Image src={canada} alt='canada image' />
          </div>
          <p>Canada</p>
          <Link href='locations#Canada'>
            <button className={styles.btn}>See location</button>
          </Link>
        </li>
        <li>
          <div className={styles.image}>
            <div className={styles.circle}></div>
            <Image src={australia} alt='austrlia image' />
          </div>
          <p>Australia</p>
          <Link href='locations#Australia'>
            <button className={styles.btn}>See location</button>
          </Link>
        </li>
        <li>
          <div className={styles.image}>
            <div className={styles.circle}></div>
            <Image src={unitedKingdom} alt='unitedKingdom image' />
          </div>
          <p>United Kingdom</p>
          <Link href='locations#UnitedKingdom'>
            <button className={styles.btn}>See location</button>
          </Link>
        </li>
      </ul>
    </section>
  );
}
