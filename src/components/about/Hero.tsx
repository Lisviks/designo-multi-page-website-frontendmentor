import styles from '@/styles/about/hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_image}></div>
      <div className={styles.bg_pattern}></div>
      <div className={styles.content}>
        <h1>About Us</h1>
        <p>
          Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with
          many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking
          forward to creating brands, products, and digital experiences that connect with our clients’ audiences.
        </p>
      </div>
    </section>
  );
}
