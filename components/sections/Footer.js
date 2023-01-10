import Image from 'next/image';

const list = [
  'inicio',
  'sobre nosotros',
  'cualidades',
  'proyectos',
  'historias',
  'contacto',
];

const Footer = () => {
  return (
    <footer className='pb-12'>
      <div className='my-20'>
        <Image
          src='/logo-koz.png'
          height={96}
          width={192}
          alt='logo'
          className='mx-auto'
        />
      </div>
      <div className='flex justify-between text-slate-200'>
        <ul className='flex uppercase gap-5 justify-between pt-4 relative'>
          <div className='absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-300 to-cyan-600' />
          {list.map((item, i) => (
            <li
              key={i}
              className='transition-all hover:text-cyan-300 hover:rotate-6 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 h-4'>
              <a href='#'>{item}</a>
            </li>
          ))}
        </ul>
        <div className='py-4 relative'>
          <div className='absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-600 to-cyan-300' />
          <p>
            Sitio de muestra construido por <a href='#'>KOZ DEV</a>.
          </p>
          <p>
            Usando <a href='#'>NextJS</a> y <a href='#'>TailwindCSS</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
