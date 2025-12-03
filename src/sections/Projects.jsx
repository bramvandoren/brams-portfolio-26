import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfoliodata';
import { ArrowUpRight, Github, FolderOpen } from 'lucide-react';

const Projects = () => {
  // We splitsen de projecten: Top 3 is "Featured", de rest is "Archive"
  const featuredProjects = portfolioData.projects.slice(0, 3);
  const moreProjects = portfolioData.projects.slice(3);

  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      
      {/* --- HEADER --- */}
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Geselecteerd Werk
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          Een collectie van projecten waar <span className="text-gray-900 dark:text-white font-medium">techniek</span> en <span className="text-gray-900 dark:text-white font-medium">creativiteit</span> samenkomen.
        </p>
      </motion.div>

      {/* --- FEATURED PROJECTS (STICKY) --- */}
      <div className="space-y-24 mb-24">
        {featuredProjects.map((project, i) => (
          <div key={project.id} className="sticky top-28"> 
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-3xl border shadow-2xl group
                         ${project.color} border-white/20 dark:border-white/10`}
            >
              <div className="flex flex-col md:flex-row h-full md:min-h-[500px]">
                
                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-between md:w-1/2 
                                bg-white/80 dark:bg-black/60 backdrop-blur-xl z-10">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border 
                                     bg-black/5 border-black/5 text-gray-900
                                     dark:bg-white/10 dark:border-white/10 dark:text-white">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    
                    <p className="text-base md:text-lg leading-relaxed mb-8 text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                    
                    {/* Tags als pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                       {project.tags.map((tag, idx) => (
                         <span key={idx} className="text-xs font-mono px-2 py-1 rounded bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300">
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <div className="flex flex-wrap gap-6 mt-auto">
                    
                    {/* 1. Live Project of PDF Link */}
                    {(() => {
                      // We kijken naar liveUrl, en als die niet bestaat naar 'link' (fallback)
                      const targetUrl = project.liveURL || project.link;
                      
                      // Als er helemaal geen link is, tonen we niets
                      if (!targetUrl) return null;

                      // Check of het een PDF is
                      const isPdf = targetUrl.endsWith('.pdf');

                      return (
                        <a 
                          href={targetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          download={isPdf} // Zorgt dat PDF downloadt (optioneel)
                          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider 
                                    text-gray-900 hover:gap-4 transition-all duration-300
                                    dark:text-white border-b border-black/20 dark:border-white/20 pb-1 
                                    hover:border-black dark:hover:border-white"
                        >
                          {isPdf ? "Download Verslag" : "Bekijk Project"} 
                          {/* Gebruik FolderOpen icoon voor PDF, anders de pijl */}
                          {isPdf ? <FolderOpen size={18} /> : <ArrowUpRight size={18} />}
                        </a>
                      );
                    })()}

                    {/* 2. GitHub Link (Alleen als githubUrl bestaat) */}
                    {project.githubURL && (
                      <a 
                        href={project.githubURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider 
                                  text-gray-500 hover:gap-4 transition-all duration-300
                                  dark:text-gray-400 border-b border-transparent pb-1 
                                  hover:text-gray-900 dark:hover:text-white 
                                  hover:border-gray-900 dark:hover:border-white"
                      >
                        Bron Code <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 relative min-h-[300px] overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent z-10 md:hidden" />
                   <motion.img 
                     whileHover={{ scale: 1.05 }}
                     transition={{ duration: 0.7 }}
                     src={project.image} 
                     alt={project.title} 
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                   />
                </div>

              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* --- MORE PROJECTS (GRID / ARCHIVE) --- */}
      {moreProjects.length > 0 && (
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <FolderOpen className="text-blue-500" /> 
              Overige Projecten
            </h3>
            
            {/* Toggle Button */}
            <button 
              onClick={() => setShowMore(!showMore)}
              className="text-sm font-medium text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              {showMore ? "Toon minder" : `Bekijk alle (${moreProjects.length})`}
            </button>
          </div>

          <AnimatePresence>
            {showMore && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden"
              >
                {moreProjects.map((project) => (
                  <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="group relative p-6 rounded-2xl bg-white border border-gray-100 dark:bg-white/5 dark:border-white/5 hover:border-blue-500/30 transition-all hover:shadow-lg"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-lg ${project.color} bg-opacity-20`}>
                        <FolderOpen size={20} className="text-gray-900 dark:text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        {/* Github knop */}
                        {project.githubURL && (
                          <a 
                            href={project.githubURL} 
                            target="_blank" 
                            rel="noreferrer"
                            aria-label="Bekijk broncode op GitHub"
                            className="p-2 rounded-full transition-all duration-300
                                      text-gray-400 bg-transparent
                                      hover:text-gray-900 hover:bg-gray-200/50 
                                      dark:hover:text-white dark:hover:bg-white/20
                                      hover:scale-110"
                          >
                            <Github size={18} />
                          </a>
                        )}
                        
                        {/* Live Website / PDF knop  */}
                        {project.liveURL && (
                          <a 
                            href={project.liveURL} 
                            target="_blank" 
                            rel="noreferrer"
                            aria-label="Bekijk live project"
                            className="p-2 rounded-full transition-all duration-300
                                      text-gray-400 bg-transparent
                                      hover:text-blue-600 hover:bg-blue-50 
                                      dark:hover:text-blue-400 dark:hover:bg-blue-500/20
                                      hover:scale-110"
                          >
                            <ArrowUpRight size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex gap-2">
                      {project.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* --- GITHUB CTA --- */}
      <div className="mt-16 text-center">
        <a 
          href="https://github.com/bramvandoren" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <Github size={20} />
          <span className="text-sm">Bekijk meer code op GitHub</span>
        </a>
      </div>

    </section>
  );
};

export default Projects;