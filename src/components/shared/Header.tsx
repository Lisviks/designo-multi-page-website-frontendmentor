import Image from 'next/image';
import { useState } from 'react';
import Navbar from './Navbar';
import Link from 'next/link';

export default function Header() {
  const [navActive, setNavActive] = useState(false);

  return (
    <header className='header'>
      <Link href='/' className='logo'>
        <Image src='/assets/shared/desktop/logo-dark.png' alt='logo' height={27} width={202}></Image>
      </Link>
      <div onClick={() => setNavActive(!navActive)} className='nav-menu-icon'>
        {navActive ? (
          <Image src='assets/shared/mobile/icon-close.svg' alt='close menu' height={20} width={20} />
        ) : (
          <Image src='assets/shared/mobile/icon-hamburger.svg' alt='close menu' height={20} width={24} />
        )}
      </div>
      <Navbar navActive={navActive} />
    </header>
  );
}
