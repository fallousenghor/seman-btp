import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
