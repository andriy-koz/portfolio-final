import Image from 'next/image';
import SubTitle from '../UI/SubTitle';
import BtnSecondary from '../UI/BtnSecondary';

const SectionAbout = () => {
  return (
    <section className='bg-slate-800 pt-96 pb-56 -mt-[32vh] px-8'>
      <div className='mb-28 text-center min-[300px]:max-lg:mb-12'>
        <SubTitle text='diseño y desarrollo de sitios web personalizados' />
      </div>
      <div className='flex max-w-7xl mx-auto space-x-8 min-[300px]:max-lg:space-x-0 min-[300px]:max-lg:flex-col'>
        <div className='flex-1 min-[300px]:max-lg:mb-12'>
          <h3 className='mb-7 uppercase text-xl'>
            Soluciones que se ajustan a tus objetivos y presupuesto
          </h3>
          <p className='text-lg'>
            Nuestra agencia de desarrollo web ofrece servicios personalizados de
            diseño y desarrollo de sitios web a empresas y negocios de todos los
            tamaños.
          </p>
          <h3 className='my-7 uppercase text-xl'>
            Últimas tecnologías en diseño y desarrollo
          </h3>
          <p className='text-lg mb-14 min-[300px]:max-lg:mb-7'>
            Ofrecemos una amplia gama de servicios, incluyendo diseño de sitios
            web personalizado, desarrollo de aplicaciones web, optimización de
            motores de búsqueda y marketing digital.
          </p>
          <BtnSecondary text='cotización gratuita' />
        </div>
        <div className='flex-1'>
          <div className='relative group'>
            <div className='transition-all z-10 w-3/5 h-48 absolute shadow-2xl rounded-sm overflow-hidden left-0 top-0 peer-hover:scale-90 hover:!scale-105 hover:-translate-y-1 hover:z-20 hover:outline-8 hover:outline hover:outline-violet-600 hover:outline-offset-[20px] group-hover:scale-95'>
              <Image fill alt='Foto 1' src='/about-3.webp' />
            </div>
            <div className='transition-all z-10 w-3/5 h-48 absolute shadow-2xl rounded-md overflow-hidden right-0 top-20 peer-hover:scale-90 hover:!scale-105 hover:-translate-y-1 hover:z-20 hover:outline-8 hover:outline hover:outline-violet-600 hover:outline-offset-[20px] group-hover:scale-95'>
              <Image fill alt='Foto 2' src='/about-2.webp' />
            </div>
            <div className='transition-all z-10 w-3/5 h-48 absolute shadow-2xl rounded-md overflow-hidden left-24 top-40 peer-hover:scale-90 hover:!scale-105 hover:-translate-y-1 hover:z-20 hover:outline-8 hover:outline hover:outline-violet-600 hover:outline-offset-[20px] group-hover:scale-95'>
              <Image fill alt='Foto 3' src='/about-1.webp' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
