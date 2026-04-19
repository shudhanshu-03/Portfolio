import { useEffect } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProCursor from './components/ProCursor';
import DockNavbar from './components/DockNavbar';
import './styles/globals.css';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/30 text-white selection:text-white">
      {/* Texture Overlay */}
      <div className="noise-bg" />
      
      <ProCursor />
      <DockNavbar />

      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Hero />
          <About />
          <Tech />
          <Projects />
          <Contact />
          <Footer />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export default App;
