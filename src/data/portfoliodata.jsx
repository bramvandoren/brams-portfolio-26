// src/data/portfolioData.js

// --- ICONS ---
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaPython, FaWordpress, FaPhp } from 'react-icons/fa';
import { 
  SiTailwindcss, SiNextdotjs, SiTypescript,
  SiSymfony, SiArduino, SiRaspberrypi, SiAdobe, SiFigma, SiSupabase, SiThreedotjs, SiMysql 
} from 'react-icons/si';

// --- AFBEELDINGEN IMPORTS ---
import kotgreenerImage from '../assets/images/kotgreener-poster.jpg';
import astralauraImage from '../assets/images/astral-aura-logo.png';
import wotImage from '../assets/images/WOT-kist.jpg';
import projectPlantImage from '../assets/images/project-plant-image.png';
import graffitmeImage from '../assets/images/graffit-me-logo.png';

import fpPortfolioImage from '../assets/images/fpp-house.png';
import chatImage from '../assets/images/yet-another-chat-image.png';
import immoImage from '../assets/images/immo-image.png';
import vcdbImage from '../assets/images/vcdb-website.png';
import todoImage from '../assets/images/student-to-do-logo.svg';
import ringParkietImage from '../assets/images/ring-your-parkeet.png';
import wotPdf from '../assets/images/WOT-Escape-Room.pdf';

// Logos
import ArteveldeLogo from '../assets/logos/artevelde-hogeschool.png';
import OdiseeLogo from '../assets/logos/odisee.png';
import KuLeuvenLogo from '../assets/logos/ku-leuven.png';
import SintVincentius from '../assets/logos/sint-vincentius-buggenhout.png';

export const portfolioData = {
  name: "Bram van Doren",
  role: "Creative Developer",
  email: "bramvandoren1@hotmail.com",
  socials: [
    { name: "GitHub", url: "#", icon: FaGithub },
    { name: "LinkedIn", url: "#", icon: FaLinkedin },
  ],
  stack: [
    { 
      category: "Frontend & Web", 
      items: [
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Three.js", icon: SiThreedotjs },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "TypeScript", icon: SiTypescript },
      ]
    },
    { 
      category: "Backend & CMS", 
      items: [
        { name: "Symfony", icon: SiSymfony },
        { name: "WordPress", icon: FaWordpress },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Python", icon: FaPython },
        { name: "Supabase", icon: SiSupabase },
        { name: "MySQL", icon: SiMysql },
        { name: "PHP", icon: FaPhp },
      ]
    },
    { 
      category: "Hardware & IoT", 
      items: [
        { name: "Raspberry Pi", icon: SiRaspberrypi },
        { name: "Arduino", icon: SiArduino },
      ]
    },
    { 
      category: "Design & Tools", 
      items: [
        { name: "Figma", icon: SiFigma },
        { name: "Adobe Express", icon: SiAdobe },
        { name: "Git", icon: FaGithub },
      ]
    }
  ],

  education: [
    { school: 'Artevelde Hogeschool', program: 'Grafische en Digitale Media', period: '2021 - 2024', logo: ArteveldeLogo },
    { school: 'Odisee', program: 'Elektronica - ICT', period: '2018 - 2021 (niet voltooid)', logo: OdiseeLogo },
    { school: 'KU Leuven', program: 'Industrieel Ingenieur', period: '2017 - 2018 (niet voltooid)', logo: KuLeuvenLogo },
    { school: 'Sint-Vincentiuscollege Buggenhout', program: 'Wetenschappen-Wiskunde', period: 'Middelbaar', logo: SintVincentius},
  ],

  experience: [
    { year: '2024-...', title: 'Customer Succes Officer', company: 'Tilroy', desc: 'Omnichannel Retail Software support & success.' },
    { year: '2024', title: "Stagiair Webontwikkeling", company: 'SumoCoders', desc: "Interne app 'Vettige Vrijdag' gebouwd met Symfony." },
    { year: '2018 - 2024', title: 'Student Magazijn', company: 'Br. Vercauteren', desc: 'Logistiek werk en orderpicking.' },
    { year: '2023', title: 'Student Process Analyst', company: 'Telenet', desc: 'Ondersteuning datamigratie.' },
  ],

  projects: [
    // 1. FEATURED: De absolute toppers (Mix van Tech, IoT en Creative)
    {
      id: 1,
      title: 'KotGreener',
      category: 'Full Stack App',
      description: 'Webapplicatie die studenten helpt hun kot te vergroenen met gamification elementen.',
      image: kotgreenerImage,
      tags: ['React', 'Supabase', 'Tailwind'],
      githubURL: "https://github.com/bramvandoren/KotGreener",
      liveURL: "https://kot-greener.vercel.app/",
      color: 'dark:bg-green-900 bg-green-100', 
    },
    {
      id: 2,
      title: 'First Person Portfolio',
      category: 'Creative 3D',
      description: 'Interactief portfolio in first-person perspectief. Loop door mijn werk als in een game.',
      image: fpPortfolioImage,
      tags: ['React Three Fiber', 'Three.js', 'Blender'],
      // githubURL: "https://github.com/bramvandoren/fpp-bramvandoren",
      liveURL: "https://gdmgent-2324-xr.github.io/fpp-bramvandoren/#/rapier/world",
      color: 'dark:bg-orange-900 bg-orange-100',
    },
    {
      id: 3,
      title: 'Las Sombras',
      category: 'IoT Escape Room',
      description: 'High-tech escape room waar fysieke puzzels communiceren met een digitale server.',
      image: wotImage,
      tags: ['Python', 'Raspberry Pi', 'Flask'],
      liveURL: wotPdf,
      color: 'dark:bg-red-900 bg-red-100',
    },

    // 4. ARCHIVE / GRID: De overige projecten (worden getoond bij "Toon meer")
    {
      id: 4,
      title: 'Yet Another Chat',
      category: 'Real-time',
      description: 'Real-time chat applicatie.',
      image: chatImage,
      tags: ['React', 'Socket.io', 'Node.js'],
      githubURL: "https://github.com/bramvandoren/yet-another-chat",
      liveURL: "https://yet-another-chat.web.app/",
      color: 'bg-indigo-100',
    },
    {
      id: 5,
      title: 'Clubsite VC Den Boskant',
      category: 'CMS',
      description: 'Maatwerk WordPress website voor de lokale voetbalvereniging.',
      image: vcdbImage,
      tags: ['WordPress'],
      liveURL: "https://www.vcdenboskantpeizegem.be/",
      color: 'bg-blue-100',
    },
    {
      id: 6,
      title: 'IMMO Platform',
      category: 'Web App',
      description: 'Vastgoedplatform met filters, favorieten en kaartintegratie.',
      image: immoImage,
      tags: ['Next.js', 'Tailwind', 'Leaflet'],
      githubURL: "https://github.com/bramvandoren/immo",
      color: 'bg-slate-100',
    },
    {
      id: 7,
      title: 'Astral Aura',
      category: 'Platform',
      description: 'Platform voor mediums en klanten met CMS integratie.',
      image: astralauraImage,
      tags: ['CraftCMS', 'React', 'GraphQL'],
      githubURL: "https://github.com/bramvandoren/astral-aura-app",
      color: 'bg-purple-100',
    },
    {
      id: 8,
      title: 'Ring Your Parkeet',
      category: 'Laravel',
      description: 'Slimme notificatie tool. (Vul hier aan wat het precies doet: belletje, sensor, camera?)',
      image: ringParkietImage,
      tags: ['Python', 'IoT', 'Hardware'],
      githubURL: "https://github.com/bramvandoren/ring-your-parkeet",
      color: 'bg-yellow-100',
    },
    {
      id: 9,
      title: 'Student To Do',
      category: 'Productivity',
      description: 'Minimalistische todo app specifiek voor studententaken en deadlines.',
      image: todoImage,
      tags: ['React', 'LocalStorage', 'Framer'],
      githubURL: "https://github.com/bramvandoren/to-do-app",
      liveURL: "https://what-s-a-student-to-do-62d5d.firebaseapp.com/",
      color: 'bg-pink-100',
    },
    {
      id: 10,
      title: 'Project Plant',
      category: 'IoT',
      description: 'Automatisch bewateringssysteem met sensor-logging.',
      image: projectPlantImage,
      tags: ['Raspberry Pi', 'Python', 'Sensors'],
      githubURL: "https://github.com/bramvandoren/iot-project-plant",
      color: 'bg-emerald-100',
    },
    {
      id: 11,
      title: 'Graffit-me',
      category: 'Concept',
      description: 'App concept ter bestrijding van illegale graffiti in de stad.',
      image: graffitmeImage,
      tags: ['Figma', 'UI/UX', 'Business'],
      githubURL: "https://github.com/emieldeboyser/Grafitt-me?tab=readme-ov-file",
      color: 'bg-yellow-100',
    },
  ]
};