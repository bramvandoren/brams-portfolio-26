import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight, CheckCircle, Send } from 'lucide-react';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa'; // Zorg dat je deze icons hebt
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import { ArrowRight, Loader2 } from 'lucide-react';

// Importeer je BentoCard component
import BentoCard from '../components/ui/BentoCard';

// --- HULP COMPONENT: SOCIAL CARD ---
// Dit maakt het makkelijk om strakke, moderne kaarten te maken
const SocialCard = ({ icon: Icon, title, subtitle, gradient, link }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noreferrer" 
    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl p-4 h-32 border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5 transition-all hover:scale-[1.02]"
  >
    {/* Verborgen Gradient die verschijnt bij hover */}
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${gradient}`} />
    
    <div className="relative z-10 flex justify-between items-start">
      <div className="p-2 rounded-full bg-black/5 dark:bg-white/10 group-hover:bg-white/20 text-gray-700 dark:text-white group-hover:text-white transition-colors">
        <Icon size={20} />
      </div>
      <ArrowUpRight size={18} className="text-gray-400 group-hover:text-white/80 transition-colors" />
    </div>

    <div className="relative z-10 mt-2">
      <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-white leading-tight">
        {title}
      </h4>
      <p className="text-[10px] text-gray-500 dark:text-gray-400 group-hover:text-white/90 truncate">
        {subtitle}
      </p>
    </div>
  </a>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); 
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef();

  // Instellingen
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '32479181167';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hallo Bram, ik heb een vraag!')}`;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Naam is verplicht';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Geldig emailadres verplicht';
    if (!formData.message.trim()) newErrors.message = 'Bericht mag niet leeg zijn';
    if (!recaptchaToken) newErrors.recaptcha = 'Bevestig dat je geen robot bent';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');

    emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setRecaptchaToken(null);
        recaptchaRef.current.reset();
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((err) => {
        console.error(err);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto">
      <BentoCard className="bg-gradient-to-br from-gray-100 to-gray-200 border-white/50
                            dark:from-gray-900 dark:to-black dark:border-white/10 p-0 overflow-hidden">
        
        <div className="flex flex-col md:flex-row h-full">
          
          {/* LINKERKANT: INFO & SOCIALS */}
          <div className="md:w-5/12 p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact.</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
                Heb je een project in gedachten of wil je gewoon even sparren? Ik ben altijd in voor een goed gesprek.
              </p>
              
              {/* Standaard Contact Info */}
              <div className="space-y-4 mb-8">
                <a href="mailto:bramvandoren1@hotmail.com" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Mail size={18} />
                  <span className="text-sm font-medium">bramvandoren1@hotmail.com</span>
                </a>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  <FaWhatsapp size={18} />
                  <span className="text-sm font-medium">{whatsappNumber}</span>
                </a>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <MapPin size={18} />
                  <span className="text-sm font-medium">Londerzeel, BE</span>
                </div>
              </div>
            </div>

            {/* DE SOCIAL GRID */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Socials</p>
              <div className="grid grid-cols-2 gap-3">
                {/* Instagram Card */}
                <SocialCard 
                  icon={FaInstagram}
                  title="Instagram"
                  subtitle="@bramvandoren"
                  link="https://www.instagram.com/bramvandoren/"
                  gradient="from-yellow-400 via-orange-500 to-purple-600"
                />
                
                {/* Facebook Card (Modern Blue) */}
                <SocialCard 
                  icon={FaFacebookF}
                  title="Facebook"
                  subtitle="Bram van Doren"
                  link="https://www.facebook.com/bram.vandoren.33"
                  gradient="from-blue-600 to-blue-800"
                />
              </div>
            </div>
          </div>

          {/* RECHTERKANT: FORMULIER */}
          <div className="md:w-7/12 p-8 md:p-10 dark:bg-transparent">
             <form onSubmit={handleSubmit} className="space-y-5 h-full flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <input 
                      type="text" name="name" placeholder="Naam" value={formData.name} onChange={handleChange}
                      className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all 
                                  bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 
                                  text-gray-900 dark:text-white placeholder:text-gray-400
                                  ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-[10px] ml-1">{errors.name}</p>}
                  </div>
                  <div className="space-y-1">
                    <input 
                      type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}
                      className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all 
                                  bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 
                                  text-gray-900 dark:text-white placeholder:text-gray-400
                                  ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-[10px] ml-1">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="space-y-1">
                  <textarea 
                    name="message" rows="5" placeholder="Vertel me over je project..." value={formData.message} onChange={handleChange}
                    className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none
                                bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 
                                text-gray-900 dark:text-white placeholder:text-gray-400
                                ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && <p className="text-red-500 text-[10px] ml-1">{errors.message}</p>}
                </div>
                
                <div className="pt-2">
                   <ReCAPTCHA
                    ref={recaptchaRef}
                    theme="dark"
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    onChange={(token) => { setRecaptchaToken(token); setErrors({...errors, recaptcha: ''}); }}
                  />
                  {errors.recaptcha && <p className="text-red-500 text-[10px] mt-1">{errors.recaptcha}</p>}
                </div>

                <button 
                    type="submit" 
                    disabled={status === 'sending' || status === 'success'}
                    className={`group relative w-full py-4 rounded-xl font-bold overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl
                        ${status === 'success' 
                        ? 'bg-green-500 text-white cursor-default' 
                        : 'bg-gray-900 dark:bg-white text-white dark:text-black'
                        }
                        ${status === 'sending' ? 'cursor-wait opacity-80' : ''}
                    `}
                    >
                    {status !== 'success' && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_auto] animate-gradient" />
                    )}
                    
                    {/* CONTENT */}
                    <div className="relative flex justify-center items-center gap-2">
                        {status === 'sending' ? (
                        <>
                            <Loader2 size={18} className="animate-spin" />
                            <span>Verzenden...</span>
                        </>
                        ) : status === 'success' ? (
                        <>
                            <CheckCircle size={18} />
                            <span>Bericht Verzonden!</span>
                        </>
                        ) : (
                        <>
                            <span className="group-hover:text-white transition-colors">Verstuur Bericht</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 group-hover:text-white transition-all duration-300" />
                        </>
                        )}
                    </div>
                </button>
                
                {status === 'error' && (
                  <p className="text-red-500 text-center text-sm">Oeps! Er ging iets mis. Probeer het later opnieuw.</p>
                )}
             </form>
          </div>

        </div>
      </BentoCard>
    </section>
  );
};

export default Contact;