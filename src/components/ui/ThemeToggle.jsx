import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-200 ease-in-out
                 bg-black/5 hover:bg-black/10 text-gray-700
                 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white
                 active:scale-90 hover:rotate-12"
      aria-label="Wissel thema"
      title={theme === 'dark' ? "Schakel naar lichte modus" : "Schakel naar donkere modus"}
    >
      {theme === 'dark' ? (
        <Sun size={18} className="transition-transform" />
      ) : (
        <Moon size={18} className="transition-transform" />
      )}
    </button>
  );
};

export default ThemeToggle;