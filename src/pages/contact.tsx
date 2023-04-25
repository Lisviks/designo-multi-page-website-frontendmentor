import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Head from 'next/head';
import LocationSection from '@/components/shared/LocationSection';
import Form from '@/components/contact/Form';

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
        <div className='leaf_bg_pattern' style={{ top: '88.5rem', right: '0' }}></div>
        <Header />
        <Form />
        <LocationSection />
        <Footer isContactPage={true} />
      </main>
    </>
  );
}
