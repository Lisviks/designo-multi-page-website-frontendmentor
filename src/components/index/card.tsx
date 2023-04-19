import styles from '@/styles/index/section1.module.scss';
import Image from 'next/image';

interface Props {
  title: string;
  link: string;
}

export default function Card(props: Props) {
  return (
    <div className={styles.card}>
      <h2>{props.title}</h2>
      <a href={props.link}>
        View Project
        <Image src='/assets/shared/desktop/arrow-right.svg' alt='arrow to the right' height={8} width={4} />
      </a>
    </div>
  );
}
