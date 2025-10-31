import { useState } from "react";
import { questions } from "./data/questions";
import { characters } from "./data/characters";
import { calculateMBTI } from "./utils/mbti";
import { Language, getTranslations } from "./utils/i18n";
import { Landing } from "./components/Landing";
import { QuizQuestion } from "./components/QuizQuestion";
import { ResultCard } from "./components/ResultCard";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { CharacterGallery } from "./components/CharacterGallery";
import { HalloweenBackground } from "./components/HalloweenBackground";
import { NetflixNav } from "./components/NetflixNav";

type GameState = "landing" | "quiz" | "loading" | "result" | "gallery";

export default function App() {
  const [gameState, setGameState] = useState<GameState>("landing");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>('en');

  const t = getTranslations(language);

  const handleStart = () => {
    setGameState("quiz");
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  const handleAnswer = (score: string) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz complete
      setGameState("loading");
      
      // Calculate result
      setTimeout(() => {
        const mbtiType = calculateMBTI(newAnswers);
        setResult(mbtiType);
        setGameState("result");
      }, 2000);
    }
  };

  const handleRetake = () => {
    setGameState("landing");
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  const handleViewGallery = () => {
    setGameState("gallery");
  };

  const handleSelectCharacter = (mbti: string) => {
    setResult(mbti);
    setGameState("result");
  };

  const handleBackToLanding = () => {
    setGameState("landing");
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="relative min-h-screen bg-[#141414]">
      <HalloweenBackground />
      
      {/* Netflix Navigation - Show on all pages except quiz */}
      {gameState !== "quiz" && gameState !== "loading" && (
        <NetflixNav 
          onLogoClick={handleBackToLanding}
          language={language}
          onLanguageChange={handleLanguageChange}
        />
      )}

      <div className="relative z-10">
        {gameState === "landing" && (
          <Landing 
            onStart={handleStart} 
            onViewGallery={handleViewGallery}
            language={language}
          />
        )}

        {gameState === "quiz" && (
          <QuizQuestion
            question={questions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
            language={language}
          />
        )}

        {gameState === "loading" && <LoadingSpinner language={language} />}

        {gameState === "result" && result && (
          <ResultCard
            character={characters[result]}
            onRetake={handleRetake}
            onViewGallery={handleViewGallery}
            language={language}
          />
        )}

        {gameState === "gallery" && (
          <CharacterGallery
            onClose={handleBackToLanding}
            onSelectCharacter={handleSelectCharacter}
            language={language}
          />
        )}
      </div>
    </div>
  );
}