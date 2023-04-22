import { StaticImageData } from 'next/image';

import airfilterImg from '../../../public/assets/app-design/desktop/image-airfilter.jpg';
import eyecamImg from '../../../public/assets/app-design/desktop/image-eyecam.jpg';
import faceitImg from '../../../public/assets/app-design/desktop/image-faceit.jpg';
import todoImg from '../../../public/assets/app-design/desktop/image-todo.jpg';
import loopstudiosImg from '../../../public/assets/app-design/desktop/image-loopstudios.jpg';

interface CardsData {
  title: string;
  text: string;
  image: StaticImageData;
}

const cardsData: CardsData[] = [
  {
    title: 'Airfilter',
    text: 'Solving the problem of poor indoor air quality by filtering the air',
    image: airfilterImg,
  },
  {
    title: 'Eyecam',
    text: 'Product that lets you edit your favorite photos and videos at any time',
    image: eyecamImg,
  },
  {
    title: 'Faceit',
    text: 'Get to meet your favorite internet superstar with the faceit app',
    image: faceitImg,
  },
  {
    title: 'Todo',
    text: 'A todo app that features cloud sync with light and dark mode',
    image: todoImg,
  },
  {
    title: 'Loopstudios',
    text: 'A VR experience app made for Loopstudios',
    image: loopstudiosImg,
  },
];

export default cardsData;
