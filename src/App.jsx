import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
