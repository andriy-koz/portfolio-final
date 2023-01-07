import SubTitle from '../UI/SubTitle';
import TestimonialsCard from '../UI/TestimonialsCard';

const Testimonials = () => {
  return (
    <section className='flex flex-col justify-center align-middle text-center space-y-10 mt-10'>
      <SubTitle text='Lo que nuestros clientes dicen sobre Koz Dev' />
      <TestimonialsCard
        img='/testimonial-man.webp'
        name='Carlos Martínez'
        title='Una experiencia de primera clase'
        text='Siempre estuvo dispuesto a trabajar con nosotros para entender nuestras necesidades y ofrecernos soluciones personalizadas. Además, siempre entregaron a tiempo y fueron un gran apoyo durante todo el proceso. ¡Muy recomendables!'
      />
      <TestimonialsCard
        img='/testimonial-woman.webp'
        name='Ana Rodríguez'
        title='Trabajar con Koz Dev ha sido un verdadero placer'
        text='El equipo es muy profesional y siempre estuvo dispuesto a ayudarnos a alcanzar nuestras metas tecnológicas. La calidad del trabajo es excelente y el resultado final superó nuestras expectativas. ¡Sin duda los elegiríamos de nuevo para futuros proyectos!'
      />
    </section>
  );
};

export default Testimonials;
