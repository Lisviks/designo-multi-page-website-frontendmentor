import styles from '@/styles/shared.module.scss';
import Image from 'next/image';
import SocialLinks from './socialLinks';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.get_in_touch}>
        <div className={styles.content}>
          <h4>Let&apos;s talk about your project</h4>
          <p>
            Ready to take it to the next level? Contact us today and find out how our expertise can help your business
            grow.
          </p>
          <button className={styles.btn}>Get in touch</button>
        </div>
        <Image
          src='assets/shared/desktop/footer-circles.svg'
          alt='ds'
          height={584}
          width={876}
          className={styles.bg_pattern}
        />
      </div>
      <div className={styles.footer_header}>
        <div className={styles.logo}>
          <Image src='/assets/shared/desktop/logo-light.png' alt='logo' height={27} width={202} />
        </div>
        <ul className={styles.links}>
          <li>
            <a href='#'>Our company</a>
          </li>
          <li>
            <a href='#'>Locations</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.footer_info}>
        <div className={styles.address}>
          <p>Designo Central Office</p>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div className={styles.contact_info}>
          <p>Contact Us (Central Office)</p>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
