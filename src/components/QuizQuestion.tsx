import { Question } from "../data/questions";
import { useState } from "react";
import { Language, getTranslations } from "../utils/i18n";

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (score: string) => void;
  onPrevious: () => void;
  canGoBack: boolean;
  language: Language;
}

export function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onPrevious,
  canGoBack,
  language,
}: QuizQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const t = getTranslations(language);

  const handleSelect = (score: string) => {
    setSelectedOption(score);
    setTimeout(() => {
      onAnswer(score);
      setSelectedOption(null);
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col px-6 pb-12" style={{ animation: 'fadeInUp 0.5s ease-out' }}>
      <div className="max-w-3xl w-full mx-auto space-y-6">

        {/* Spacer for fixed navbar */}
        <div className="h-20"></div>

        {/* Back button at top - larger and more visible */}
        {canGoBack && (
          <div className="mb-6 relative z-[60]">
            <button
              onClick={onPrevious}
              className="px-6 py-4 bg-zinc-800 hover:bg-zinc-700 text-white text-lg rounded-xl transition-all flex items-center gap-3 shadow-lg"
            >
              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-semibold">{t.quiz.back}</span>
            </button>
          </div>
        )}

        {/* Question */}
        <div className="text-center space-y-6">
          <div className="text-7xl mb-6">{question.emoji}</div>
          <h2
            lang={language}
            className="text-3xl md:text-4xl text-white"
          >
            {question.text[language]}
          </h2>
        </div>

        {/* Options - Netflix cards style */}
        <div className="space-y-4">
          {/* Option A */}
          <button
            onClick={() => handleSelect(question.optionA.score)}
            disabled={selectedOption !== null}
            className={`group relative w-full p-8 rounded-lg transition-all duration-300 text-left ${
              selectedOption === question.optionA.score
                ? 'bg-zinc-700 scale-[1.02]'
                : 'bg-zinc-900 hover:bg-zinc-800 hover:scale-[1.02]'
            } disabled:opacity-50`}
          >
            <div className="flex items-center gap-6">
              <div className="text-5xl flex-shrink-0">{question.optionA.emoji}</div>
              <div className="flex-1">
                <div lang={language} className="text-2xl text-white">
                  {question.optionA.label[language]}
                </div>
              </div>
            </div>
            {/* Netflix red accent on hover */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-[#E50914] transition-opacity ${
              selectedOption === question.optionA.score ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`} />
          </button>

          {/* Option B */}
          <button
            onClick={() => handleSelect(question.optionB.score)}
            disabled={selectedOption !== null}
            className={`group relative w-full p-8 rounded-lg transition-all duration-300 text-left ${
              selectedOption === question.optionB.score
                ? 'bg-zinc-700 scale-[1.02]'
                : 'bg-zinc-900 hover:bg-zinc-800 hover:scale-[1.02]'
            } disabled:opacity-50`}
          >
            <div className="flex items-center gap-6">
              <div className="text-5xl flex-shrink-0">{question.optionB.emoji}</div>
              <div className="flex-1">
                <div lang={language} className="text-2xl text-white">
                  {question.optionB.label[language]}
                </div>
              </div>
            </div>
            {/* Orange accent on hover - Halloween */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-orange-500 transition-opacity ${
              selectedOption === question.optionB.score ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`} />
          </button>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 pt-4">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i < questionNumber
                  ? 'w-8 bg-[#E50914]'
                  : 'w-8 bg-zinc-700'
              }`}
            />
          ))}
        </div>

        {/* Question counter below progress bar */}
        <div className="text-center text-gray-400 text-lg font-medium pt-2">
          {questionNumber} {t.quiz.of} {totalQuestions}
        </div>
      </div>
    </div>
  );
}