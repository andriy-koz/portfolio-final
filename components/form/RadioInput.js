const RadioInput = ({ text }) => {
  return (
    <div>
      <input
        type='radio'
        id={text}
        name='form'
        value={text}
        className='accent-violet-700 scale-110'
      />
      <label for={text} className='ml-3 text-violet-900 tracking-wider'>
        {text}
      </label>
    </div>
  );
};

export default RadioInput;
