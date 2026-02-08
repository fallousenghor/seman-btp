import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (!theme) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen transition-colors duration-300">
          <Header />
          <Hero />
          <Services />
          <About />
          <Projects />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
