import { Language, getTranslations } from "../utils/i18n";

interface LoadingSpinnerProps {
  language: Language;
}

export function LoadingSpinner({ language }: LoadingSpinnerProps) {
  const t = getTranslations(language);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Netflix-style loading */}
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 border-4 border-zinc-800 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-[#E50914] rounded-full animate-spin"></div>
        </div>

        <div className="space-y-3">
          <p className="text-2xl text-white">
            {t.loading.analyzing}
          </p>
          <div className="flex items-center justify-center gap-1.5">
            <span className="w-2 h-2 bg-[#E50914] rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-2 h-2 bg-[#E50914] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
          </div>
        </div>
      </div>
    </div>
  );
}