import { motion } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = ({ theme, toggleTheme }) => (
  <motion.nav 
    initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: "circOut" }}
    className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
  >
    <div className="pointer-events-auto flex items-center gap-4 px-6 py-3 rounded-full 
                    bg-white/80 dark:bg-black/40 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-xl">
      <a href="#" className="text-gray-900 dark:text-white font-bold tracking-tighter text-lg">bram.vd</a>
      <div className="h-4 w-[1px] bg-black/10 dark:bg-white/20"></div>
      <div className="hidden sm:flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
        <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">Info</a>
        <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Werk</a>
        <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
      </div>
      <div className="h-4 w-[1px] bg-black/10 dark:bg-white/20 hidden sm:block"></div>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  </motion.nav>
);

export default Navbar;