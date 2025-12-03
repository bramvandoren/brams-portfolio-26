import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t transition-colors z-10
                       bg-white/50 border-gray-200 text-gray-600
                       dark:bg-black/80 dark:border-white/10 dark:text-gray-400
                       backdrop-blur-md">
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Links: Naam & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-gray-900 dark:text-white text-lg tracking-tight">
              Bram van Doren.
            </h3>
            <p className="text-xs opacity-70 mt-1">
              © {currentYear} — Alle rechten voorbehouden.
            </p>
          </div>

          {/* Rechts: Socials & Scroll knop */}
          <div className="flex items-center gap-6">
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/bramvandoren" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-black dark:hover:text-white transition-colors hover:scale-110 duration-200"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/bram-van-doren-077802223/" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110 duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>

            {/* Scheidingslijn */}
            <div className="h-4 w-[1px] bg-gray-300 dark:bg-white/20 hidden sm:block"></div>

            {/* Terug naar boven knop */}
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider hover:text-black dark:hover:text-white transition-colors"
            >
              Terug naar boven
              <span className="p-1.5 rounded-full bg-black/5 dark:bg-white/10 group-hover:-translate-y-1 transition-transform duration-300">
                <ArrowUp size={14} />
              </span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;