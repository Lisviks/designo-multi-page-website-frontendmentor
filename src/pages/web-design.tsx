import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Hero from '@/components/shared/design-pages/Hero';
import Section1 from '@/components/shared/design-pages/Section1';
import Section2 from '@/components/web-design/Section2';
import Head from 'next/head';
import cardsData from '../components/web-design/cardsData';

export default function Home() {
  return (
    <>
      <Head>
        <title>Designo | Web Design</title>
      </Head>
      <main>
        <div className='leaf_bg_pattern' style={{ top: '28.1rem' }}></div>
        <Header />
        <Hero
          title='Web Design'
          text='We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
        />
        <Section1 cardsData={cardsData} />
        <Section2 />
        <Footer />
      </main>
    </>
  );
}
