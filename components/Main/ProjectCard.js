const ProjectCard = ({ bgColor, bgImg, title }) => {
  return (
    <div className='flex-1 group relative rounded-md overflow-hidden h-80 shadow-lg'>
      <div className='bg-slate-200 h-full w-full transition-all duration-1000 group-hover:rotate-y-180 absolute top-0 left-0 backface-hidden'>
        <div
          className={`h-60 w-full ${bgImg} bg-cover bg-blend-screen clip-card-pattern relative`}>
          <h4 className='absolute top-32 right-5 w-2/3 uppercase text-2xl text-right p-1 opacity-90'>
            <span className={`box-decoration-clone px-3 py-1 ${bgColor}`}>
              {title}
            </span>
          </h4>
        </div>
      </div>
      <div
        className={`bg-gradient-to-br from-orange-200 to-orange-700 h-full w-full transition-all duration-1000 rotate-y-180 group-hover:rotate-y-0 absolute top-0 left-0 backface-hidden ${bgColor}`}>
        BACK
      </div>
    </div>
  );
};

export default ProjectCard;
