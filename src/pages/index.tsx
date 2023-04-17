import Hero from '@/components/index/hero';
import Header from '@/shared/header';
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
      </main>
    </>
  );
}
