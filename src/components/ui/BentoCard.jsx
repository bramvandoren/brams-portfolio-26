import { motion } from 'framer-motion';

const BentoCard = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`relative overflow-hidden rounded-3xl p-6 backdrop-blur-md transition-colors duration-300
        bg-white/60 border border-black/5 shadow-lg
        dark:bg-white/5 dark:border-white/10 dark:shadow-none
        ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default BentoCard;