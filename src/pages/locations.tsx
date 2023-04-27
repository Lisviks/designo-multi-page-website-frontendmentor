import Card from '@/components/locations/Card';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Head from 'next/head';
import styles from '@/styles/locations/section.module.scss';
import data from '@/../public/data.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>Designo | Locations</title>
      </Head>
      <main>
        <div className='leaf_bg_pattern'></div>
        <div className='leaf_bg_pattern' style={{ top: '177.7rem', right: '-39.6rem' }}></div>
        <Header />
        <section className={styles.section}>
          <Card {...data.canada} />
          <Card {...data.australia} />
          <Card {...data.uk} />
        </section>
        <Footer />
      </main>
    </>
  );
}
