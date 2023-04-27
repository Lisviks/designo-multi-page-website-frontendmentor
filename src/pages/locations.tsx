import Card from '@/components/locations/Card';
import {
  australiaAddress,
  australiaContact,
  canadaAddress,
  canadaContact,
  ukAddress,
  ukContact,
} from '@/components/locations/locationsInfo';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Head from 'next/head';
import styles from '@/styles/locations/section.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Designo website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/assets/favicon-32x32.png' />
      </Head>
      <main>
        <div className='leaf_bg_pattern'></div>
        <div className='leaf_bg_pattern' style={{ top: '177.7rem', right: '-39.6rem' }}></div>
        <Header />
        <section className={styles.section}>
          <Card title='Canada' address={canadaAddress} contact={canadaContact} />
          <Card title='Australia' address={australiaAddress} contact={australiaContact} />
          <Card title='United Kingdom' address={ukAddress} contact={ukContact} />
        </section>
        <Footer />
      </main>
    </>
  );
}
