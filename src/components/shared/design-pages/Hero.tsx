import styles from '@/styles/shared/design-pages/hero.module.scss';

interface Props {
  title: string;
  text: string;
}

export default function Hero({ title, text }: Props) {
  const getBgPattern = () => {
    const pageTitle = title.split(' ')[0].toLowerCase();

    if (pageTitle === 'web') return <div className={styles.web_bg_pattern}></div>;
    if (pageTitle === 'app') return <div className={styles.app_bg_pattern}></div>;
    if (pageTitle === 'graphic') return <div className={styles.graphic_bg_pattern}></div>;
  };

  return (
    <section className={styles.hero}>
      {getBgPattern()}
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
