import CustomInput from '../form/CustomInput';
import RadioInput from '../form/RadioInput';
import SubTitle from '../UI/SubTitle';

const Contact = () => {
  return (
    <section className='bg-gradient-to-br from-violet-200 to-violet-500 py-36 relative'>
      <div className='h-[500px] bg-form-section bg-cover bg-center relative'>
        <div className='absolute top-0 left-0 h-full w-full bg-black opacity-20' />
        <form className='w-3/5 h-full bg-white/80 clip-form flex flex-col justify-center items-start pl-14 gap-10'>
          <div className='brightness-75'>
            <SubTitle text='pide tu presupuesto sin cargo' />
          </div>
          <CustomInput text='Nombre completo' />
          <CustomInput text='Dirección email' email />
          <div className='flex justify-between w-3/4'>
            <RadioInput text='Empresa' />
            <RadioInput text='ONG' />
            <RadioInput text='Particular' />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
