const BtnCta = ({ text }) => {
  return (
    <a
      href='#'
      className='uppercase py-4 px-10 bg-white color text-zinc-900 inline-block hover:-translate-y-1 active:-translate-y-0.5 mt-14 rounded-full transition-all hover:shadow-lg active:shadow-md animation-fill-back animate-in-bottom'>
      {text}
    </a>
  );
};

export default BtnCta;
