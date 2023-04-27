import Card from '@/components/about/Card';
import Hero from '@/components/about/Hero';
import { realDealImages, worldClassImages } from '@/components/about/cardImages';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Head from 'next/head';
import styles from '@/styles/about/about.module.scss';
import LocationSection from '@/components/shared/LocationSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Designo | About</title>
      </Head>
      <main>
        <div className='leaf_bg_pattern'></div>
        <div className='leaf_bg_pattern' style={{ top: '177.7rem', right: '-39.6rem' }}></div>
        <Header />
        <Hero />
        <Card
          title='World-class talent'
          text1='We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.'
          text2='Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.'
          images={worldClassImages}
          cardName='worldClass'
        />
        <LocationSection />
        <Card
          title='The real deal'
          text1='As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.'
          text2='We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.'
          images={realDealImages}
          cardName='realDeal'
        />
        <div className={styles.space}></div>
        <Footer />
      </main>
    </>
  );
}
