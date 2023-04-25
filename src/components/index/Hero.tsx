import Image from 'next/image';
import styles from '@/styles/index/hero.module.scss';
import sharedStyles from '@/styles/shared.module.scss';
import Link from 'next/link';

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
        <Image src='/assets/home/desktop/image-hero-phone.png' alt='Phone image' height={573} width={375}></Image>
      </div>
      <div className={styles.bg_pattern}>
        <svg width='640' height='639' xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <linearGradient x1='0%' y1='50%' x2='100%' y2='50%' id='a'>
              <stop stopColor='#5D0202' stopOpacity='0' offset='0%' />
              <stop stopColor='#5D0202' stopOpacity='.498' offset='100%' />
            </linearGradient>
          </defs>
          <circle
            fill='url(#a)'
            transform='matrix(0 -1 -1 0 640 640)'
            cx='320'
            cy='320'
            r='320'
            fillRule='evenodd'
            opacity='.309'
          />
        </svg>
      </div>
    </section>
  );
}
