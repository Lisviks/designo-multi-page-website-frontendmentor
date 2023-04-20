import Hero from '@/components/index/hero';
import Section1 from '@/components/index/section1';
import Section2 from '@/components/index/section2';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
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
        <Header />
        <Hero />
        <Section1 />
        <Section2 />
        <Footer />
      </main>
    </>
  );
}
