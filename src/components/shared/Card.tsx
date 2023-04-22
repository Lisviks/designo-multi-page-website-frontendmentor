import Image, { StaticImageData } from 'next/image';

interface Props {
  image: StaticImageData;
  title: string;
  text: string;
}

export default function Card({ image, title, text }: Props) {
  return (
    <div className='card'>
      <div className='image'>
        <Image src={image.src} alt={`${title} image`} height={image.height} width={image.width} />
      </div>
      <div className='content'>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
