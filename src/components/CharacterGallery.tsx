import { characters } from "../data/characters";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { Language, getTranslations } from "../utils/i18n";

interface CharacterGalleryProps {
  onClose: () => void;
  onSelectCharacter: (mbti: string) => void;
  language: Language;
}

export function CharacterGallery({ onClose, onSelectCharacter, language }: CharacterGalleryProps) {
  const fallbackImage = "https://images.unsplash.com/photo-1668617863206-5b1ad46e76f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400";
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const t = getTranslations(language);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Group characters by personality type
  const characterGroups = {
    "Analysts": ["INTJ", "INTP", "ENTJ", "ENTP"],
    "Diplomats": ["INFJ", "INFP", "ENFJ", "ENFP"],
    "Sentinels": ["ISTJ", "ISFJ", "ESTJ", "ESFJ"],
    "Explorers": ["ISTP", "ISFP", "ESTP", "ESFP"]
  };

  return (
    <div className="min-h-screen bg-[#141414]">
      
      {/* Netflix-style header */}
      <div className="sticky top-0 z-50 bg-[#141414] border-b border-gray-800">
        <div className="px-4 md:px-12 py-6 flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl text-white">
            All Characters
          </h1>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="px-4 md:px-12 py-8 space-y-12">
        
        {/* Netflix-style rows */}
        {Object.entries(characterGroups).map(([groupName, mbtiTypes]) => (
          <div key={groupName} className="space-y-4">
            <h2 className="text-xl md:text-2xl text-white mb-4">
              {groupName}
            </h2>

            {/* Horizontal scrollable row */}
            <div className="relative group">
              
              {/* Left scroll button */}
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-r from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>

              {/* Character cards */}
              <div 
                ref={scrollContainerRef}
                className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {mbtiTypes.map((mbti) => {
                  const character = characters[mbti];
                  if (!character) return null;

                  return (
                    <button
                      key={mbti}
                      onClick={() => onSelectCharacter(mbti)}
                      onMouseEnter={() => setHoveredCard(mbti)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className="relative flex-shrink-0 w-48 md:w-56 netflix-card group/card"
                    >
                      <div className="relative">
                        <div className="aspect-[2/3] relative rounded overflow-hidden">
                          <ImageWithFallback
                            src={character.imagePath || fallbackImage}
                            alt={character.name[language]}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                        </div>

                        {/* Hover info overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70 transition-opacity duration-300 ${
                          hoveredCard === mbti ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs bg-[#E50914] px-2 py-1 rounded text-white">
                                {character.mbti}
                              </span>
                              <div className="flex items-center gap-2">
                                <button className="w-8 h-8 rounded-full border-2 border-white hover:bg-white hover:text-black transition-colors flex items-center justify-center">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <h3 className="text-sm text-white line-clamp-1">
                              {character.name[language]}
                            </h3>
                            <p className="text-xs text-gray-400 line-clamp-2">
                              {character.role[language]}
                            </p>
                          </div>
                        </div>

                        {/* Default bottom info */}
                        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 ${
                          hoveredCard === mbti ? 'opacity-0' : 'opacity-100'
                        }`}>
                          <div className="inline-flex px-2 py-1 bg-[#E50914] rounded mb-2">
                            <span className="text-xs text-white">{character.mbti}</span>
                          </div>
                          <h3 className="text-sm text-white truncate">
                            {character.name[language]}
                          </h3>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right scroll button */}
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-l from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}