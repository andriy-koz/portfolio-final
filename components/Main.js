import Features from './sections/Features';
import Projects from './sections/Projects';
import SectionAbout from './sections/SectionAbout';
import Testimonials from './sections/Testimonials';

const Main = () => {
  return (
    <main>
      <SectionAbout />
      <Features />
      <Projects />
      <Testimonials />
    </main>
  );
};

export default Main;
