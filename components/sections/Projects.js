import ProjectCard from '../UI/ProjectCard';
import BtnCta from '../UI/BtnCta';
import SubTitle from '../UI/SubTitle';

const Projects = () => {
  return (
    <div className='bg-slate-800 pt-96 pb-80 -mt-[26vh] px-8 relative z-10'>
      <div className='mb-20 text-center'>
        <SubTitle text='nuestros proyectos' />
      </div>
      <div className='flex max-w-7xl mx-auto space-x-20 h-72 mb-32'>
        <ProjectCard
          bgColor='bg-orange-transparent'
          bgImg='bg-card1'
          title='Bodega de vinos'
          lista={[
            'Amplia selección de vinos',
            'Información sobre cada vino',
            'Pago seguro y entrega rápida',
            'Suscripciones o club de vinos',
          ]}
        />
        <ProjectCard
          bgColor='bg-violet-transparent'
          bgImg='bg-card3'
          title='Portfolio minimalista'
          lista={[
            'Proyectos destacados',
            'Experiencia laboral relevante',
            'Educación y formación académica',
            'Habilidades técnicas',
          ]}
        />
        <ProjectCard
          bgColor='bg-cyan-transparent'
          bgImg='bg-card2'
          title='Todo App'
          lista={[
            'Añadir nuevas tareas',
            'Marcar tareas como completadas',
            'Eliminar tareas',
            'Filtrar las tareas visibles',
          ]}
        />
      </div>
      <div className='absolute bottom-28 left-1/2 -translate-x-1/2'>
        <BtnCta text='ver codigo en Github' color />
      </div>
    </div>
  );
};

export default Projects;
