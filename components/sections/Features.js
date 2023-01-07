import Card from '../UI/Card';

const Features = () => {
  return (
    <section className='bg-features-pattern bg-cover -skew-y-6 -mt-20 z-20 relative'>
      <div className='flex max-w-7xl justify-between mx-auto space-x-16 px-8 py-48 skew-y-6'>
        <Card
          iconsrc='icon-globe.svg'
          content='Sitio web profesional y atractivo diseñado especialmente para ti.'
          title='Transforma tu negocio'
        />
        <Card
          iconsrc='icon-data.svg'
          content='Atrae más clientes potenciales con un sitio web moderno y optimizado para motores de búsqueda.'
          title='Aumenta tu visibilidad en línea'
        />
        <Card
          iconsrc='icon-check.svg'
          content='Para asegurar que tu sitio se adapte perfectamente a tus necesidades y objetivos de negocio.'
          title=' Soluciones personalizadas'
        />
        <Card
          iconsrc='icon-reward.svg'
          content='Sitio web profesional y atractivo diseñado especialmente para ti.'
          title='Transforma tu negocio'
        />
      </div>
    </section>
  );
};

export default Features;
