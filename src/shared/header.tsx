import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <div className='logo'>
        <Image src='/assets/shared/desktop/logo-dark.png' alt='logo' height={27} width={202}></Image>
      </div>
      <svg width='24' height='20' xmlns='http://www.w3.org/2000/svg'>
        <g fill='#1D1C1E' fillRule='evenodd'>
          <path d='M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z' />
        </g>
      </svg>
    </header>
  );
}
