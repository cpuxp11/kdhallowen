import { Character } from "../data/characters";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Share2, RotateCcw } from "lucide-react";
import { useRef } from "react";
import { Language, getTranslations } from "../utils/i18n";
import characterIllustration from 'figma:asset/649e7a27c5579c1574c3978f2d0d070a531fe2bd.png';

interface ResultCardProps {
  character: Character;
  onRetake: () => void;
  onViewGallery: () => void;
  language: Language;
}

export function ResultCard({ character, onRetake, onViewGallery, language }: ResultCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const t = getTranslations(language);

  // Parse text with quote highlights
  const parseHighlightText = (text: string) => {
    const parts = text.split(/('[^']+')/g);
    return parts.map((part, idx) => {
      if (part.startsWith("'") && part.endsWith("'")) {
        return (
          <span key={idx} className="text-white font-medium italic">
            {part}
          </span>
        );
      }
      return <span key={idx}>{part}</span>;
    });
  };

  const handleShare = async () => {
    const url = `${window.location.origin}?result=${character.mbti}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `I'm ${character.name[language]}!`,
          text: `I got ${character.mbti} - ${character.role[language]} 🎃`,
          url: url,
        });
      } catch (err) {
        copyToClipboard(url);
      }
    } else {
      copyToClipboard(url);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Link copied! Share with your friends 🔥");
    } catch (err) {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
          alert("Link copied! Share with your friends 🔥");
        } else {
          prompt("Copy this link to share:", text);
        }
      } catch (fallbackErr) {
        prompt("Copy this link to share:", text);
      }
    }
  };

  const fallbackImage = "https://images.unsplash.com/photo-1668617863206-5b1ad46e76f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcG9wJTIwaWRvbCUyMGRhcmt8ZW58MXx8fHwxNzYxNDY2OTcxfDA&ixlib=rb-4.1.0&q=80&w=1080";

  return (
    <div className="min-h-screen bg-[#141414]">
      
      {/* Netflix-style modal/detail view */}
      <div className="relative">
        
        {/* Hero Section with Character Illustration */}
        <div className="relative min-h-[70vh] md:h-[85vh]">
          
          {/* Split background - Left dark, right with image blur */}
          <div className="absolute inset-0 grid md:grid-cols-2">
            {/* Left side - solid dark */}
            <div className="bg-[#1a1a2e]" />
            {/* Right side - blurred bg image */}
            <div className="relative overflow-hidden bg-[#2d2d44]">
              <div className="absolute inset-0 opacity-20">
                <ImageWithFallback
                  src={character.imagePath || fallbackImage}
                  alt=""
                  className="w-full h-full object-cover blur-xl"
                />
              </div>
            </div>
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/50" />

          {/* Pumpkin decorations */}
          <div className="absolute top-10 right-[15%] w-16 h-16 opacity-40 animate-float">
            🎃
          </div>
          <div className="absolute bottom-[20%] right-[10%] w-12 h-12 opacity-30 animate-float" style={{ animationDelay: '1s' }}>
            🎃
          </div>
          <div className="absolute top-[30%] right-[5%] opacity-20 text-2xl">
            ✨
          </div>

          {/* Content - Centered layout */}
          <div className="relative z-20 h-full flex items-center px-4 md:px-12">
            <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              
              {/* Left: Text content */}
              <div style={{ animation: 'fadeInUp 0.8s ease-out' }}>
                
                {/* Netflix N Badge */}
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-[#E50914] flex items-center justify-center">
                    <span className="text-white text-sm font-bold">N</span>
                  </div>
                  <span className="text-gray-300 uppercase tracking-widest text-xs">{t.result.yourResult}</span>
                </div>

                {/* Character Title */}
                <h1
                  className={`text-white mb-4 max-w-2xl ${
                    (character.name?.[language]?.length || 0) > 15 ? 'text-4xl md:text-5xl' : 'text-5xl md:text-7xl'
                  }`}
                  style={{
                    fontWeight: 900,
                    textShadow: '2px 2px 10px rgba(0,0,0,0.9)',
                    lineHeight: '1.1',
                    wordBreak: 'break-word',
                    hyphens: 'auto'
                  }}
                >
                  {character.name?.[language] || character.name}
                </h1>

                <p className="text-2xl md:text-3xl text-[#E50914] mb-6">
                  {character.role[language]}
                </p>

                {/* Quote */}
                <div className="border-l-4 border-[#E50914] pl-6 mb-8">
                  <p className="text-xl text-gray-300 italic">
                    "{character.quote[language]}"
                  </p>
                </div>

              </div>

              {/* Right: Character Illustration */}
              <div className="relative flex items-center justify-center" style={{ animation: 'fadeInScale 1s ease-out' }}>
                <div className="relative">
                  {/* Glow effect behind character */}
                  <div className="absolute inset-0 bg-gradient-radial from-purple-500/30 via-transparent to-transparent blur-3xl scale-150" />
                  <div className="absolute inset-0 bg-gradient-radial from-[#E50914]/20 via-transparent to-transparent blur-2xl scale-125 animate-pulse" />
                  
                  {/* Character illustration */}
                  <img
                    src={character.imagePath || characterIllustration}
                    alt={character.name[language]}
                    className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 0 40px rgba(229, 9, 20, 0.3))',
                      animation: 'floatSlow 3s ease-in-out infinite'
                    }}
                  />

                  {/* Sparkle effects */}
                  <div className="absolute top-[10%] left-[10%] text-3xl animate-pulse opacity-80">✨</div>
                  <div className="absolute top-[20%] right-[15%] text-2xl animate-pulse opacity-60" style={{ animationDelay: '0.5s' }}>⭐</div>
                  <div className="absolute bottom-[15%] left-[15%] text-2xl animate-pulse opacity-70" style={{ animationDelay: '1s' }}>💫</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#141414] to-transparent z-20" />
        </div>

        {/* Details Section - Netflix style */}
        <div className="px-4 md:px-12 pt-4 md:pt-8 pb-12 bg-[#141414]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Left column */}
            <div className="space-y-8 md:space-y-10">

              {/* Full bio */}
              <div>
                <h3 className="text-[#E50914] text-xl mb-3 font-semibold">
                  {t.result.about} {character.name?.[language] || character.name}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {character.bio[language]}
                </p>
              </div>

              {/* Halloween Behavior */}
              <div>
                <h3 className="text-[#E50914] text-xl mb-3 font-semibold">
                  {language === 'ko' ? '할로윈을 즐기는 방법' : 'How They Celebrate Halloween'}
                </h3>
                <div className="space-y-3 text-base leading-relaxed">
                  {character.halloweenBehavior[language].split(/[.!?]\s+/).filter(s => s.trim()).map((sentence, idx) => (
                    <p key={idx} className="text-gray-300">
                      {parseHighlightText(sentence.trim() + (sentence.match(/[.!?]$/) ? '' : '.'))}
                    </p>
                  ))}
                </div>
              </div>

            </div>

            {/* Right column */}
            <div>
              {/* Traits */}
              <div>
                <h3 className="text-[#E50914] text-xl mb-4 font-semibold">{t.result.keyTraits}</h3>
                <div className="flex flex-wrap gap-3">
                  {character.traits[language].map((trait, idx) => (
                    <span
                      key={idx}
                      className="px-5 py-3 bg-zinc-800 text-white rounded-lg text-base hover:bg-zinc-700 transition-colors border-2 border-zinc-600"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Action buttons - positioned after content */}
          <div className="max-w-6xl mx-auto mt-16 pb-8">
            <div className="flex flex-wrap items-center gap-3 justify-center">
              <button
                onClick={handleShare}
                className="flex items-center gap-3 px-8 py-3 bg-white hover:bg-gray-200 text-black rounded transition-all"
              >
                <Share2 className="w-5 h-5" />
                <span className="font-semibold">{t.result.shareResult}</span>
              </button>

              <button
                onClick={onRetake}
                className="flex items-center gap-3 px-6 py-3 bg-gray-500/70 hover:bg-gray-500/50 text-white rounded transition-all backdrop-blur-sm"
              >
                <RotateCcw className="w-5 h-5" />
                <span className="font-semibold">{t.result.retakeQuiz}</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}