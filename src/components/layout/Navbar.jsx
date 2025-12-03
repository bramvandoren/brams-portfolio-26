// Zorg ervoor dat dit bestand in je 'components' of 'layout' map staat
// Bijv: src/components/Navbar.jsx of src/layout/Navbar.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle'; // Pas dit pad aan indien nodig.

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Varianten voor het mobiele dropdown menu
  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      y: -10, 
      pointerEvents: 'none' 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      pointerEvents: 'auto',
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        when: "beforeChildren", // Animeer de container voordat de kinderen animeren
        staggerChildren: 0.05 // Vertraag animatie van de kinderen
      }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      pointerEvents: 'none',
      transition: { 
        duration: 0.2,
        when: "afterChildren", // Animeer de container nadat de kinderen animeren
        staggerChildren: 0.05, 
        staggerDirection: -1 // Omgekeerde volgorde bij sluiten
      }
    }
  };

  // Varianten voor de individuele menu-items in het mobiele menu
  const menuItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center"
    >
      {/* Container voor de hoofdnavigatiebalk en het mobiele menu.
          Belangrijk: 'relative' hier, omdat het mobiele menu 'absolute' hierbinnen zal positioneren. */}
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col items-center pointer-events-none relative">
        {/* De daadwerkelijke, zwevende navigatiebalk */}
        <div className="pointer-events-auto flex items-center justify-between sm:justify-center gap-4 px-6 py-3 rounded-full 
                        bg-white/80 dark:bg-black/40 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-xl
                        w-full sm:w-auto"> {/* Zorgt dat de balk de volledige breedte vult op mobiel, of auto op desktop */}
          
          <a href="#hero" className="text-gray-900 dark:text-white font-bold tracking-tighter text-lg">bram.vd</a>
          
          {/* Desktop navigatielinks (verborgen op mobiel) */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="h-4 w-[1px] bg-black/10 dark:bg-white/20"></div>
            <div className="flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
              <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">Info</a>
              <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Werk</a>
              <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Scheidingslijn voor desktop tussen links en themaknop, en voor mobiel tussen naam en themaknop/menu-icoon */}
          <div className="h-4 w-[1px] bg-black/10 dark:bg-white/20 hidden sm:block"></div> {/* Alleen zichtbaar op desktop */}
          <div className="h-4 w-[1px] bg-black/10 dark:bg-white/20 block sm:hidden"></div> {/* Alleen zichtbaar op mobiel */}
          
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          {/* Hamburger-menu knop (alleen zichtbaar op mobiel) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="block sm:hidden p-2 -mr-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label={isMenuOpen ? "Sluit menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobiele dropdown menu-overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-[calc(100%+16px)] left-0 right-0 
                         bg-white/90 dark:bg-black/70 backdrop-blur-md shadow-lg rounded-xl
                         p-4 flex flex-col gap-3 text-center pointer-events-auto
                         sm:hidden" // Zorgt ervoor dat dit alleen op mobiel verschijnt
            >
              <motion.a variants={menuItemVariants} href="#about" onClick={() => setIsMenuOpen(false)} 
                         className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors py-1">Info</motion.a>
              <motion.a variants={menuItemVariants} href="#projects" onClick={() => setIsMenuOpen(false)} 
                         className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors py-1">Werk</motion.a>
              <motion.a variants={menuItemVariants} href="#contact" onClick={() => setIsMenuOpen(false)} 
                         className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors py-1">Contact</motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;