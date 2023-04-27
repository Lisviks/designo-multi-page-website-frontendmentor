import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Hero from '@/components/shared/design-pages/Hero';
import Section1 from '@/components/shared/design-pages/Section1';
import Head from 'next/head';
import cardsData from '../components/graphic-design/cardsData';
import Section2 from '@/components/graphic-design/Section2';

export default function Home() {
  return (
    <>
      <Head>
        <title>Designo | Graphic Design</title>
      </Head>
      <main>
        <div className='leaf_bg_pattern' style={{ top: '28.1rem' }}></div>
        <Header />
        <Hero
          title='Graphic Design'
          text='We deliver eye-catching branding materials that are tailored to meet your business objectives.'
        />
        <Section1 cardsData={cardsData} />
        <Section2 />
        <Footer />
      </main>
    </>
  );
}
