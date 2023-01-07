import BtnCta from './BtnCta';

const ProjectCard = ({ bgColor, bgImg, title, lista }) => {
  return (
    <div className='flex-1 group relative rounded-md overflow-hidden h-[500px] shadow-lg'>
      <div className='bg-slate-200 h-full w-full transition-all duration-1000 group-hover:rotate-y-180 absolute top-0 left-0 backface-hidden'>
        <div
          className={`h-60 w-full ${bgImg} bg-cover bg-blend-screen clip-card-pattern relative`}
        />
        <h4 className='absolute top-40 right-5 w-2/3 uppercase text-2xl text-right p-1'>
          <span className={`box-decoration-clone px-3 py-1 ${bgColor}`}>
            {title}
          </span>
        </h4>
        <ul className='w-4/5 text-center text-slate-600 mx-auto mt-3'>
          <li className='border-b-[1px] border-b-slate-300 py-4'>{lista[0]}</li>
          <li className='border-b-[1px] border-b-slate-300 py-4'>{lista[1]}</li>
          <li className='border-b-[1px] border-b-slate-300 py-4'>{lista[2]}</li>
          <li className='py-4'>{lista[3]}</li>
        </ul>
      </div>
      <div
        className={`bg-gradient-to-br from-orange-200 to-orange-700 h-full w-full transition-all duration-1000 rotate-y-180 group-hover:rotate-y-0 absolute top-0 left-0 backface-hidden ${bgColor} text-center pt-36`}>
        <BtnCta text='visita el sitio' />
      </div>
    </div>
  );
};

export default ProjectCard;
