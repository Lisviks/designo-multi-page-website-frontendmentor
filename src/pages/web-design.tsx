import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Section1 from '@/components/web-design/Section1';
import Head from 'next/head';

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
        <Header />
        <Section1 />
        <Footer />
      </main>
    </>
  );
}