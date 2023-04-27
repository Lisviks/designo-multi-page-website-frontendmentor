import Hero from '@/components/index/Hero';
import Section1 from '@/components/index/Section1';
import Section2 from '@/components/index/Section2';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Designo | Home</title>
      </Head>
      <main>
        <div className='leaf_bg_pattern'></div>
        <div className='leaf_bg_pattern'></div>
        <Header />
        <Hero />
        <Section1 />
        <Section2 />
        <Footer />
      </main>
    </>
  );
}
