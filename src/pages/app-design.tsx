import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Hero from '@/components/shared/design-pages/Hero';
import Section1 from '@/components/shared/design-pages/Section1';
import Head from 'next/head';
import cardsData from '../components/app-design/cardsData';
import Section2 from '@/components/app-design/Section2';

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
        <div className='leaf_bg_pattern' style={{ top: '28.1rem' }}></div>
        <Header />
        <Hero
          title='App Design'
          text='Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
        />
        <Section1 cardsData={cardsData} />
        <Section2 />
        <Footer />
      </main>
    </>
  );
}
