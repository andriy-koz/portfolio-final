import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className='bg-slate-800 pt-96 pb-56 -mt-[32vh] px-8'>
      <div className='mb-28 text-center'>
        <h2 className='uppercase text-3xl bg-gradient-to-r from-violet-300 to-violet-500 inline-block bg-clip-text text-transparent'>
          nuestros proyectos
        </h2>
      </div>
      <div className='flex max-w-7xl mx-auto space-x-20 h-72'>
        <ProjectCard
          bgColor='bg-orange'
          bgImg='bg-card1'
          title='Bodega de vinos'
        />
        <ProjectCard
          bgColor='bg-violet'
          bgImg='bg-card3'
          title='Portfolio minimalista'
        />
        <ProjectCard bgColor='bg-cyan' bgImg='bg-card2' title='Todo App' />
      </div>
    </div>
  );
};

export default Projects;
