import desktopCanadaMapImg from '@/../public/assets/locations/desktop/image-map-canada.png';
import desktopAustraliaMapImg from '@/../public/assets/locations/desktop/image-map-australia.png';
import desktopUKMapImg from '@/../public/assets/locations/desktop/image-map-united-kingdom.png';

import tabletCanadaMapImg from '@/../public/assets/locations/tablet/image-map-canada.png';
import tabletAustraliaMapImg from '@/../public/assets/locations/tablet/image-map-australia.png';
import tabletUKMapImg from '@/../public/assets/locations/tablet/image-map-uk.png';
import { StaticImageData } from 'next/image';

const canadaMapImages: StaticImageData[] = [desktopCanadaMapImg, tabletCanadaMapImg, desktopCanadaMapImg];
const australiaMapImages: StaticImageData[] = [desktopAustraliaMapImg, tabletAustraliaMapImg, desktopAustraliaMapImg];
const ukMapImages: StaticImageData[] = [desktopUKMapImg, tabletUKMapImg, desktopUKMapImg];

export { canadaMapImages, australiaMapImages, ukMapImages };
