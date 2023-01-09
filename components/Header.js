import Image from 'next/image';
import BtnCta from './UI/BtnCta';

const Header = () => {
  return (
    <header className='h-screen bg-hero-pattern bg-cover bg-top clip-pattern relative'>
      <div className='absolute top-7 left-7 scale-125'>
        <Image src='/logo-koz.png' alt='logo' height={35} width={70} />
      </div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full text-center'>
        <h1 className='text-white uppercase font-semibold mb-14'>
          <span className='block text-5xl tracking-wider animate-in-left'>
            <span className='tracking-tighter text-cyan-200 text-6xl'>KOZ</span>{' '}
            DEV
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
