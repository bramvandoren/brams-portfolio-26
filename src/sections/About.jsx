import { Briefcase, GraduationCap, Cpu, Download } from "lucide-react"; 
import BentoCard from "../components/ui/BentoCard";
import { portfolioData } from "../data/portfoliodata";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Over Mij</h2>
        <div className="h-1 w-20 bg-blue-500 rounded-full"/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto">
        
        {/* INTRO CARD */}
        <BentoCard className="md:col-span-2 min-h-[300px] flex flex-col justify-between">
           <div>
             <h3 className="text-blue-600 dark:text-blue-400 text-sm uppercase tracking-widest font-bold mb-4">
               Wie ben ik?
             </h3>

             <p className="text-2xl md:text-3xl text-gray-800 dark:text-white font-light leading-tight">
                Als veelzijdige <span className="font-bold">Creative Developer</span> sla ik de brug tussen <span className="font-bold">complexe backend</span> en <span className="font-bold">intuïtief design</span>.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                Dankzij mijn brede ervaring – van IoT-oplossingen tot React-applicaties overzie ik het hele speelveld. Ik gebruik deze kennis om technische uitdagingen te vertalen naar een robuust en kwalitatief eindproduct.
              </p>
           </div>

           {/* Footer: CV & Socials */}
           <div className="mt-8 flex flex-wrap items-center gap-4">
             
             {/* THEMA DOWNLOAD KNOP */}
             <a 
               href="/cv_bram_van_doren.pdf" 
               target="_blank"
               download="CV-Bram-Van-Doren.pdf" 
               className="group flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300
                          bg-gray-100 text-gray-900 
                          hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/20
                          dark:bg-white/10 dark:text-white 
                          dark:hover:bg-blue-600"
             >
               <span className="relative">
                 Download CV
               </span>
               {/* Icoon animatie: schuift naar beneden bij hover */}
               <Download size={18} className="transition-transform duration-300 group-hover:translate-y-1" />
             </a>

             {/* Divider */}
             <div className="h-8 w-[1px] bg-gray-300 dark:bg-white/20 mx-2 hidden sm:block"></div>

             {/* Social Icons */}
             <div className="flex gap-3">
                {portfolioData.socials.map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noreferrer" 
                     className="p-3 rounded-full transition-all text-gray-600 dark:text-gray-300 
                                bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/20 
                                hover:scale-110 hover:text-black dark:hover:text-white">
                    <s.icon size={20} />
                  </a>
                ))}
             </div>
           </div>
        </BentoCard>

        {/* --- 2. STACK CARD --- */}
        <BentoCard className="md:col-span-1 md:row-span-2 flex flex-col overflow-hidden" delay={0.2}>
          <div className="flex items-center gap-2 mb-6 text-green-600 dark:text-green-400 font-bold tracking-widest text-sm uppercase">
            <Cpu size={16} /> Tech Stack
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-white/10 space-y-8">
            {portfolioData.stack.map((group, groupIdx) => (
              <div key={groupIdx}>
                <h4 className="text-[10px] font-bold text-gray-400 mb-3 uppercase tracking-wider pl-1">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech, i) => (
                    <div 
                      key={i} 
                      className="group flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300
                                 bg-gray-100 border border-transparent hover:bg-white hover:border-gray-200 hover:shadow-sm
                                 dark:bg-white/5 dark:border-white/5 dark:hover:bg-white/10 dark:hover:border-white/20 dark:text-gray-300 dark:hover:text-white cursor-default"
                    >
                      <tech.icon className={`text-base transition-colors text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white`} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-black/40 to-transparent pointer-events-none" />
        </BentoCard>

        {/* --- 3. EXPERIENCE CARD--- */}
        <BentoCard className="md:col-span-1 min-h-[320px]" delay={0.3}>
          <div className="flex items-center gap-2 mb-4 text-purple-600 dark:text-purple-400 font-bold tracking-widest text-sm uppercase">
            <Briefcase size={16} /> Werkervaring
          </div>
          <div className="space-y-6 max-h-[240px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-white/20">
            {portfolioData.experience.map((exp, i) => (
              <div key={i} className="relative pl-4 border-l border-gray-200 dark:border-white/10 group">
                <div className="absolute left-[-2.5px] top-1.5 w-1 h-1 bg-purple-500 rounded-full group-hover:scale-150 transition-transform"></div>
                <span className="text-[10px] text-purple-600 dark:text-purple-300 font-mono bg-purple-50 dark:bg-purple-900/20 px-1.5 py-0.5 rounded">
                  {exp.year}
                </span>
                <h4 className="text-gray-900 dark:text-white font-semibold text-sm leading-tight mt-1 group-hover:text-purple-500 transition-colors">
                  {exp.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">{exp.company}</p>
                <p className="text-gray-400 dark:text-gray-500 text-[10px] mt-1 line-clamp-2">{exp.desc}</p>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* --- 4. EDUCATION CARD --- */}
        <BentoCard className="md:col-span-1 min-h-[320px]" delay={0.4}>
          <div className="flex items-center gap-2 mb-4 text-blue-600 dark:text-blue-400 font-bold tracking-widest text-sm uppercase">
            <GraduationCap size={16} /> Onderwijs
          </div>
           <div className="space-y-5 max-h-[240px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-white/20">
            {portfolioData.education.map((edu, i) => (
              <div key={i} className="flex items-start gap-3 pb-3 border-b border-gray-100 dark:border-white/5 last:border-0 group">
                {edu.logo && (
                  <img src={edu.logo} alt="logo" className="w-10 h-10 rounded-lg object-contain bg-white p-1 border border-gray-100 dark:border-white/10 group-hover:scale-105 transition-transform" />
                )}
                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold text-sm leading-tight group-hover:text-blue-500 transition-colors">
                    {edu.program}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">{edu.school}</p>
                  <span className="text-[10px] text-gray-400 dark:text-gray-500">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

      </div>
    </section>
  );
};

export default About;