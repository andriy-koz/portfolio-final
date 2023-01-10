import Image from 'next/image';

const TestimonialsCard = ({ name, text, title, img }) => {
  return (
    <div className='bg-white/75 h-64 w-[83%] mx-auto -skew-x-12 shadow-lg flex justify-center items-center group min-[1340px]:w-2/4'>
      <div className='skew-x-12 pr-20 pl-24 mx-auto'>
        <div className='w-max h-max shape-outside rounded-full overflow-hidden -translate-x-4 relative'>
          <div className='transition-all duration-300 scale-110 group-hover:scale-100 group-hover:blur-[2px] group-hover:brightness-75'>
            <Image
              height={128}
              width={128}
              src={`${img}`}
              alt='Testimonial portrait'
            />
          </div>
          <h4 className='transition-all duration-300 text-lg absolute top-16 w-32 text-center opacity-0 group-hover:opacity-100 group-hover:-translate-y-7 font-bold'>
            {name}
          </h4>
        </div>
        <div className='text-slate-900 text-left'>
          <h3 className='text-xl mb-4'>{title}</h3>
          <p className='leading-7 text-lg'>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
