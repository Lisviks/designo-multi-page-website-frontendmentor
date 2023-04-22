import styles from '@/styles/index/section1.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  link: string;
}

export default function LinkCard(props: Props) {
  return (
    <Link href={props.link} className={styles.card}>
      <div>
        <h2>{props.title}</h2>
        <p>
          View Project
          <Image src='/assets/shared/desktop/arrow-right.svg' alt='arrow to the right' height={8} width={4} />
        </p>
      </div>
    </Link>
  );
}
