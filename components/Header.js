import Image from 'next/image';
import BtnCta from './Main/BtnCta';

const Header = () => {
  return (
    <header className='h-screen bg-hero-pattern bg-cover bg-top clip-pattern relative'>
      <div className='absolute top-7 left-7'>
        <Image src='/logo-white.png' alt='logo' height={35} width={70} />
      </div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full text-center'>
        <h1 className='text-white uppercase font-semibold'>
          <span className='block text-6xl tracking-wider animate-in-left'>
            KOZ DEV
          </span>
          <span className='block text-xl tracking-wide mt-3 animate-in-right'>
            Desarrollo web y marketing digital
          </span>
        </h1>
        <BtnCta text='explora nuestros proyectos' />
      </div>
    </header>
  );
};

export default Header;
