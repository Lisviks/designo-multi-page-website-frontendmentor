import { StaticImageData } from 'next/image';

import expressImg from '../../../public/assets/web-design/desktop/image-express.jpg';
import transferImg from '../../../public/assets/web-design/desktop/image-transfer.jpg';
import photonImg from '../../../public/assets/web-design/desktop/image-photon.jpg';
import builderImg from '../../../public/assets/web-design/desktop/image-builder.jpg';
import blogrImg from '../../../public/assets/web-design/desktop/image-blogr.jpg';
import campImg from '../../../public/assets/web-design/desktop/image-camp.jpg';

interface CardsData {
  title: string;
  text: string;
  image: StaticImageData;
}

const cardsData: CardsData[] = [
  {
    title: 'Express',
    text: 'A multi-carrier shipping website for ecommerce businesses',
    image: expressImg,
  },
  {
    title: 'Transfer',
    text: 'Site for low-cost money transfers and sending money within seconds',
    image: transferImg,
  },
  {
    title: 'Photon',
    text: 'A state-of-the-art music player with high-resolution audio and DSP effects',
    image: photonImg,
  },
  {
    title: 'Builder',
    text: 'Connects users with local contractors based on their location',
    image: builderImg,
  },
  {
    title: 'Blogr',
    text: 'Blogr is a platform for creating an online blog or publication',
    image: blogrImg,
  },
  {
    title: 'Camp',
    text: 'Get expert training in coding, data, design, and digital marketing',
    image: campImg,
  },
];

export default cardsData;
