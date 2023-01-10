import { list } from './sections/Footer';
import { useState } from 'react';

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div
        className={`h-14 w-14 fixed top-16 right-16 radial-gradient rounded-full ${
          navOpen ? 'scale-[50]' : 'scale-1'
        } z-30 transition-all duration-500`}
      />
      <div
        className='h-16 w-16 fixed top-[3.75rem] right-[3.75rem] z-40 bg-white rounded-full cursor-pointer group '
        onClick={() => setNavOpen(prevState => !prevState)}>
        <span
          className={`mx-auto mt-[1.85rem] relative block w-8 h-[2px] bg-slate-700 transition-all before:bg-slate-700 before:w-8 before:h-[2px] before:absolute before:top-2 after:bg-slate-700 after:w-8 after:h-[2px] after:absolute after:-top-2 group-hover:after:-top-[10px] group-hover:before:top-[10px] before:transition-all after:transition-all ${
            navOpen &&
            'bg-transparent after:rotate-45 before:-rotate-45 after:top-0 after:left-0 before:top-0 before:left-0 group-hover:before:top-0 group-hover:after:top-0'
          }`}></span>
      </div>
      <ul
        className={`fixed top-1/2 left-1/2 z-50 text-white uppercase -translate-x-1/2 -translate-y-1/2 space-y-4 text-2xl flex flex-col items-center transition-all ${
          !navOpen && 'translate-x-full w-0'
        }`}>
        {list.map((item, i) => (
          <li key={i}>
            <a
              href='#'
              className={`block transition-all duration-500 bg-nav hover:bg-nav-hover hover:text-violet-800 py-1 px-2 hover:translate-x-2 ${
                navOpen ? 'w-full opacity-100' : 'w-0 opacity-0 py-0 px-0'
              }`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navigation;
