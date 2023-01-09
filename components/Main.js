import Features from './sections/Features';
import Projects from './sections/Projects';
import SectionAbout from './sections/SectionAbout';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

const Main = () => {
  return (
    <main>
      <SectionAbout />
      <Features />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Main;
