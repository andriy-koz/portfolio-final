import Image from 'next/image';

const TestimonialsCard = ({ name, text, title, img }) => {
  return (
    <div className='bg-white h-64 w-3/4 mx-auto -skew-x-12 shadow-lg flex justify-center items-center'>
      <div className='skew-x-12 pr-20 pl-24 mx-auto'>
        <div className='w-max h-max shape-outside rounded-full overflow-hidden -translate-x-4 mt-2'>
          <Image
            height={128}
            width={128}
            src={`${img}`}
            alt='Testimonial portrait'
          />
        </div>
        <div className='text-slate-900 text-left'>
          <h3 className='text-2xl mb-4'>{title}</h3>
          <p className='leading-6 text-xl'>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
