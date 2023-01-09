import SubTitle from '../UI/SubTitle';
import TestimonialsCard from '../UI/TestimonialsCard';
import BtnSecondary from '../UI/BtnSecondary';

const Testimonials = () => {
  return (
    <section className='flex flex-col justify-center align-middle text-center space-y-16 relative pb-12'>
      <div className='absolute top-0 h-full w-full -z-10 brightness-50'>
        <video autoPlay muted loop className='h-full w-full object-cover'>
          <source src='/testimonials-video.mp4' />
        </video>
      </div>
      <SubTitle text='Lo que nuestros clientes dicen sobre Koz Dev' />
      <TestimonialsCard
        img='/testimonial-man.webp'
        name='Carlos Martínez'
        title='Una experiencia de primera clase'
        text='Siempre estuvo dispuesto a trabajar con nosotros para entender nuestras necesidades y ofrecernos soluciones personalizadas. Siempre entregaron a tiempo y fueron un gran apoyo durante todo el proceso. ¡Muy recomendables!'
      />
      <TestimonialsCard
        img='/testimonial-woman.webp'
        name='Ana Rodríguez'
        title='Trabajar con Koz Dev ha sido un verdadero placer'
        text='El equipo es muy profesional y siempre estuvo dispuesto a ayudarnos a alcanzar nuestras metas tecnológicas. La calidad del trabajo es excelente y el resultado superó nuestras expectativas. ¡Los elegiríamos de nuevo para futuros proyectos!'
      />
      <div className='w-max mx-auto'>
        <BtnSecondary text='ver todas las historias' />
      </div>
    </section>
  );
};

export default Testimonials;
