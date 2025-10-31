import { useState } from "react";
import { Globe } from "lucide-react";
import { Language } from "../utils/i18n";

interface NetflixNavProps {
  onLogoClick?: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function NetflixNav({ onLogoClick, language, onLanguageChange }: NetflixNavProps) {
  const [scrolled, setScrolled] = useState(false);

  // Listen to scroll
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }

  const toggleLanguage = () => {
    onLanguageChange(language === 'en' ? 'ko' : 'en');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'
    }`}>
      <div className="px-4 md:px-12 py-4 flex items-center justify-between">
        
        {/* Left: Logo Only */}
        <button 
          onClick={onLogoClick}
          className="text-[#E50914] hover:text-[#f6121d] transition-colors"
        >
          <span 
            className="text-2xl md:text-3xl tracking-wider"
            style={{ 
              fontFamily: 'Bebas Neue, Impact, Arial Black, sans-serif',
              fontWeight: 900,
              letterSpacing: '0.15em'
            }}
          >
            HALLOWEEN HUNTER
          </span>
        </button>

        {/* Right: Language Toggle Only */}
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors group"
          title={language === 'en' ? 'Switch to Korean' : '영어로 전환'}
        >
          <Globe className="w-5 h-5 hidden md:block" />
          <span className="text-sm font-medium">
            {language === 'en' ? 'EN' : '한글'}
          </span>
        </button>
      </div>
    </nav>
  );
}