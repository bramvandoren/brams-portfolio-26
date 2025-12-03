import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import back_hero from '../assets/images/bram-hero-color.jpg';

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax & Fade effecten
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);
  const scaleImg = useTransform(scrollY, [0, 1000], [1, 1.2]);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      
      {/* Content Container */}
      <motion.div 
        style={{ y: yText, opacity: opacityHero }} 
        className="z-10 max-w-5xl flex flex-col items-center"
      >
        
        {/* 1. Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full backdrop-blur-md text-xs sm:text-sm font-medium border shadow-sm
                     bg-white/50 border-white/40 text-gray-600
                     dark:bg-white/5 dark:border-white/10 dark:text-gray-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Beschikbaar voor nieuwe projecten
        </motion.div>
        
        {/* 2. Hoofd Titel */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-6 leading-[0.9]">
          <span className="block overflow-hidden">
            <motion.span 
              initial={{ y: "110%" }} 
              animate={{ y: 0 }} 
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} 
              className="block"
            >
              bram
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-4">
             <motion.span 
               initial={{ y: "110%" }} 
               animate={{ y: 0 }} 
               transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} 
               className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient bg-[length:200%_auto]"
             >
              van doren
            </motion.span>
          </span>
        </h1>

        {/* 3. Subtitel */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-10"
        >
          Creative Developer die <span className="text-gray-900 dark:text-white font-medium">complexe logica</span> vertaalt naar <span className="text-gray-900 dark:text-white font-medium">intuïtieve designs</span>.
        </motion.p>

        {/* 4. Call to Action Knoppen (REDESIGNED) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 items-center w-full justify-center"
        >
          {/* PRIMARY BUTTON: Gradient Reveal */}
          <a 
            href="#projects"
            className="group relative px-8 py-4 rounded-full font-bold text-sm tracking-wide overflow-hidden shadow-lg transition-transform hover:scale-105 active:scale-95
                       bg-gray-900 text-white 
                       dark:bg-white dark:text-black"
          >
            {/* Gradient Background (Hidden by default, fades in on hover) */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
            
            {/* Content */}
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-200">
              <Sparkles size={18} />
              Bekijk mijn werk 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300"/>
            </span>
          </a>
          
          {/* SECONDARY BUTTON: Frosted Glass */}
          <a 
            href="#contact"
            className="group px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300
                       border border-black/5 dark:border-white/10
                       bg-white/40 dark:bg-white/5 backdrop-blur-md
                       text-gray-900 dark:text-white
                       hover:bg-white/60 dark:hover:bg-white/15 hover:border-black/10 dark:hover:border-white/30
                       active:scale-95"
          >
            <span className="flex items-center gap-2">
              <Mail size={18} className="text-gray-500 group-hover:text-black dark:text-gray-400 dark:group-hover:text-white transition-colors" />
              Contacteer mij
            </span>
          </a>
        </motion.div>

      </motion.div>

      {/* 5. Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-1 h-12 rounded-full bg-gradient-to-b from-gray-300 to-transparent dark:from-white/20"
        >
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-1/2 bg-blue-500 rounded-full blur-[2px]"
          />
        </motion.div>
      </motion.div>

      {/* Background Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50 dark:to-black z-10" />
         <motion.img 
           style={{ scale: scaleImg }}
           src={back_hero} 
           alt="Hero Background" 
           className="w-full h-full object-cover opacity-[0.05] dark:opacity-[0.15] grayscale mix-blend-multiply dark:mix-blend-overlay" 
         />
      </div>
    </section>
  );
};

export default Hero;