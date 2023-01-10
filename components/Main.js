import Features from './sections/Features';
import Projects from './sections/Projects';
import SectionAbout from './sections/SectionAbout';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const Main = () => {
  return (
    <main>
      <SectionAbout />
      <Features />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Main;
