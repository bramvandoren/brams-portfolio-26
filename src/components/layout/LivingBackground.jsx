import { memo } from 'react';
import { motion } from 'framer-motion';

const LivingBackground = () => (
  <div className="fixed inset-0 -z-50 bg-gray-50 dark:bg-black transition-colors duration-500">
    <motion.div 
      animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, 50, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[120px] 
                 bg-blue-300/40 dark:bg-blue-600/20 mix-blend-multiply dark:mix-blend-screen" 
    />
    <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px]
                     bg-purple-300/40 dark:bg-purple-600/20 mix-blend-multiply dark:mix-blend-screen" 
    />
  </div>
);

export default memo(LivingBackground);