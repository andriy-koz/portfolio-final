const CustomInput = ({ text, email }) => {
  return (
    <div className='relative w-3/4'>
      <input
        type={email ? 'email' : 'text'}
        id={text}
        placeholder={text}
        className='pl-5 py-2 w-full outline-none text-slate-900 border-y-2 border-y-transparent transition-all focus:border-b-sky-500'
      />
      <label for={text} className='absolute left-0 opacity-0'>
        {text}
      </label>
    </div>
  );
};

export default CustomInput;
