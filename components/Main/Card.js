import Image from 'next/image';

const Card = ({ iconsrc, title, content }) => {
  return (
    <div className='bg-slate-200/80 text-slate-800 flex-1 transition-all text-center p-6 rounded-md shadow-lg hover:scale-105 hover:-translate-y-3 hover:shadow-xl'>
      <div className='flex justify-center mb-4'>
        <Image height={64} width={64} alt='icon' src={`/${iconsrc}`} />
      </div>
      <h3 className='uppercase font-bold text-lg mb-4'>{title}</h3>
      <p className='text-lg'>{content}</p>
    </div>
  );
};

export default Card;
