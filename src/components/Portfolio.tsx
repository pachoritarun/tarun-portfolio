import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import AICodeAssistant from './AICodeAssistant';


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <AICodeAssistant />

    </div>
  );
};

export default Portfolio;