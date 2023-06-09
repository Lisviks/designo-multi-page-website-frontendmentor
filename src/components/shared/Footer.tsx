import styles from '@/styles/shared.module.scss';
import Image from 'next/image';
import SocialLinks from './SocialLinks';
import Link from 'next/link';

interface Props {
  isContactPage?: boolean;
}

export default function Footer(props: Props) {
  const { isContactPage = false } = props;

  return (
    <footer className={`footer ${isContactPage ? 'contact_page' : ''}`}>
      <div className='get_in_touch'>
        <div className='content'>
          <h4>Let&apos;s talk about your project</h4>
          <p>
            Ready to take it to the next level? Contact us today and find out how our expertise can help your business
            grow.
          </p>
          <Link href='contact'>
            <button className={styles.btn}>Get in touch</button>
          </Link>
        </div>
        <Image
          src='assets/shared/desktop/footer-circles.svg'
          alt='ds'
          height={584}
          width={876}
          className='bg_pattern'
        />
      </div>
      <div className='footer_header'>
        <Link href='/' className='logo'>
          <Image src='/assets/shared/desktop/logo-light.png' alt='logo' height={27} width={202} />
        </Link>
        <ul className='links'>
          <li>
            <Link href='about'>Our company</Link>
          </li>
          <li>
            <Link href='locations'>Locations</Link>
          </li>
          <li>
            <Link href='contact'>Contact</Link>
          </li>
        </ul>
      </div>
      <div className='footer_info'>
        <div className='address'>
          <p>Designo Central Office</p>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div className='contact_info'>
          <p>Contact Us (Central Office)</p>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
