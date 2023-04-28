import Image from 'next/image';
import styles from '@/styles/index/hero.module.scss';
import sharedStyles from '@/styles/shared.module.scss';
import Link from 'next/link';
import BgPatternCircle from '../svgs/BgPatternCircle';
import phoneImage from '@/../public/assets/home/desktop/image-hero-phone.png';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and
          engaging brand experiences. Find out more about our services.
        </p>
        <Link href='about'>
          <button className={sharedStyles.btn}>Learn more</button>
        </Link>
      </div>
      <div className={styles.image}>
        <Image src={phoneImage} alt='Phone image'></Image>
      </div>
      <div className={styles.bg_pattern}>
        <BgPatternCircle />
      </div>
    </section>
  );
}
