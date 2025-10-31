import { Language, getTranslations } from "../utils/i18n";

interface LandingProps {
  onStart: () => void;
  onViewGallery: () => void;
  language: Language;
}

export function Landing({ onStart, onViewGallery, language }: LandingProps) {
  const t = getTranslations(language);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-black via-[#1a0a0a] to-black overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjIyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
      
      {/* Red glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E50914] rounded-full blur-[120px] opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E50914] rounded-full blur-[120px] opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-4xl text-center" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
        
        {/* Netflix N Badge */}
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-[#E50914] flex items-center justify-center">
            <span className="text-white font-bold">N</span>
          </div>
          <span className="text-gray-400 uppercase tracking-widest text-sm">{t.landing.badge}</span>
        </div>

        {/* Title */}
        <h1 className="mb-6" style={{ 
          fontSize: 'clamp(3rem, 15vw, 8rem)',
          lineHeight: 0.9,
          textShadow: '0 0 40px rgba(229, 9, 20, 0.5), 0 0 80px rgba(229, 9, 20, 0.3)' 
        }}>
          <span className="block text-white" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            {t.landing.title1}
          </span>
          <span className="block text-[#E50914]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            {t.landing.title2}
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-white mb-4">
          {t.landing.subtitle}
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          {t.landing.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <button
            onClick={onStart}
            className="group relative px-12 py-4 bg-[#E50914] hover:bg-[#f6121d] text-white text-xl rounded overflow-hidden transition-all transform hover:scale-105 shadow-lg shadow-red-900/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative flex items-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              {t.landing.startButton}
            </span>
          </button>

          <button
            onClick={onViewGallery}
            className="px-12 py-4 bg-zinc-800 hover:bg-zinc-700 text-white text-xl rounded transition-all transform hover:scale-105"
          >
            {t.landing.moreInfoButton}
          </button>
        </div>

        {/* Info tags */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          <span className="text-green-500 border border-green-500 px-2 py-0.5">{t.landing.new}</span>
          <span className="text-gray-400">{t.landing.year}</span>
          <span className="border border-gray-500 px-2 py-0.5 text-gray-400">{t.landing.questions}</span>
          <span className="text-gray-400">{t.landing.characters}</span>
          <span className="border border-gray-500 px-2 py-0.5 text-gray-400">{t.landing.duration}</span>
        </div>
      </div>
    </div>
  );
}