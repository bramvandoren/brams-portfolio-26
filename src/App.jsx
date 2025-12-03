import { BrowserRouter as Router } from 'react-router-dom';

// Hooks
import { useTheme } from './hooks/useTheme';

// Layout & UI
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LivingBackground from './components/layout/LivingBackground';
import NoiseOverlay from './components/ui/NoiseOverlay';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div className={`min-h-screen font-sans transition-colors duration-300 selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-white
                      bg-gray-50 text-gray-900 
                      dark:bg-black dark:text-white`}>
        
        {/* Background Layers */}
        <NoiseOverlay />
        <LivingBackground />
        
        {/* Navigation */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;