import desktopWorldClassImg from '@/../public/assets/about/desktop/image-world-class-talent.jpg';
import tabletWorldClassImg from '@/../public/assets/about/tablet/image-world-class-talent.jpg';
import mobileWorldClassImg from '@/../public/assets/about/mobile/image-world-class-talent.jpg';

import desktopRealDealImg from '@/../public/assets/about/desktop/image-real-deal.jpg';
import tabletRealDealImg from '@/../public/assets/about/tablet/image-real-deal.jpg';
import mobileRealDealImg from '@/../public/assets/about/mobile/image-real-deal.jpg';
import { StaticImageData } from 'next/image';

const worldClassImages: StaticImageData[] = [desktopWorldClassImg, tabletWorldClassImg, mobileWorldClassImg];
const realDealImages: StaticImageData[] = [desktopRealDealImg, tabletRealDealImg, mobileRealDealImg];

export { worldClassImages, realDealImages };
