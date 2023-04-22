import { StaticImageData } from 'next/image';

import changeImg from '../../../public/assets/graphic-design/desktop/image-change.jpg';
import boxedWaterImg from '../../../public/assets/graphic-design/desktop/image-boxed-water.jpg';
import scienceImg from '../../../public/assets/graphic-design/desktop/image-science.jpg';

interface CardsData {
  title: string;
  text: string;
  image: StaticImageData;
}

const cardsData: CardsData[] = [
  {
    title: 'Tim Brown',
    text: 'A book cover designed for Tim Brown’s new release, ‘Change’',
    image: changeImg,
  },
  {
    title: 'Boxed Water',
    text: 'A simple packaging concept made for Boxed Water',
    image: boxedWaterImg,
  },
  {
    title: 'Science!',
    text: 'A poster made in collaboration with the Federal Art Project',
    image: scienceImg,
  },
];

export default cardsData;
