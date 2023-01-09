const BtnSecondary = ({ text }) => {
  return (
    <a
      href='#'
      className='uppercase py-3 px-1 font-extrabold text-violet-400 border-b-2 border-t-2 border-t-transparent border-b-violet-400 inline-block hover:-translate-y-1 active:-translate-y-0.5 transition-all hover:shadow-lg active:shadow-md animation-fill-back animate-in-bottom hover:bg-violet-400 hover:text-slate-800 hover:border-t-violet-400'>
      {text} &rarr;
    </a>
  );
};

export default BtnSecondary;
