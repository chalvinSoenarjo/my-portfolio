import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}

export default App;