import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className='bg-slate-800 pt-96 pb-56 -mt-[26vh] px-8'>
      <div className='mb-20 text-center'>
        <h2 className='uppercase text-3xl bg-gradient-to-r from-violet-300 to-violet-500 inline-block bg-clip-text text-transparent'>
          nuestros proyectos
        </h2>
      </div>
      <div className='flex max-w-7xl mx-auto space-x-20 h-72'>
        <ProjectCard
          bgColor='bg-orange-transparent'
          bgImg='bg-card1'
          title='Bodega de vinos'
          lista={[
            'Amplia selección de vinos',
            'Información detallada sobre cada vino',
            'Pago seguro y entrega rápida',
            'Suscripciones o club de vinos',
          ]}
        />
        <ProjectCard
          bgColor='bg-violet-transparent'
          bgImg='bg-card3'
          title='Portfolio minimalista'
          lista={[
            'Proyectos profesionales destacados',
            'Experiencia laboral relevante',
            'Educación y formación académica',
            'Habilidades técnicas y de comunicación',
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
    </div>
  );
};

export default Projects;
