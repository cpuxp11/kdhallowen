export type Language = 'en' | 'ko';

export interface Translations {
  nav: {
    home: string;
    characters: string;
    quiz: string;
  };
  landing: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    description: string;
    startButton: string;
    moreInfoButton: string;
    new: string;
    year: string;
    questions: string;
    characters: string;
    duration: string;
  };
  quiz: {
    of: string;
    back: string;
  };
  result: {
    yourResult: string;
    about: string;
    keyTraits: string;
    shareResult: string;
    retakeQuiz: string;
    hunterRole: string;
    personalityType: string;
    classification: string;
    tags: string;
    moreCharacters: string;
    viewAll: string;
  };
  gallery: {
    title: string;
    analysts: string;
    diplomats: string;
    sentinels: string;
    explorers: string;
  };
  loading: {
    analyzing: string;
    calculating: string;
    revealing: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      characters: 'Characters',
      quiz: 'Quiz',
    },
    landing: {
      badge: 'ORIGINAL',
      title1: 'HALLOWEEN',
      title2: 'HUNTER',
      subtitle: 'K-pop Demon Hunters Halloween Prep Type Test',
      description: 'Discover which legendary K-pop demon hunter matches your personality in this Halloween special quiz.',
      startButton: 'Start Quiz',
      moreInfoButton: 'More Info',
      new: 'NEW',
      year: '2025',
      questions: '12 Questions',
      characters: '10 Characters',
      duration: '3 min',
    },
    quiz: {
      of: 'of',
      back: 'Back',
    },
    result: {
      yourResult: 'YOUR RESULT',
      about: 'About',
      keyTraits: 'Key Traits',
      shareResult: 'Share Result',
      retakeQuiz: 'Retake Quiz',
      hunterRole: 'Hunter Role:',
      personalityType: 'Personality Type:',
      classification: 'Classification:',
      tags: 'Tags:',
      moreCharacters: 'More Characters',
      viewAll: 'View All',
    },
    gallery: {
      title: 'All Characters',
      analysts: 'Analysts',
      diplomats: 'Diplomats',
      sentinels: 'Sentinels',
      explorers: 'Explorers',
    },
    loading: {
      analyzing: 'Analyzing your demon hunter profile...',
      calculating: 'Calculating MBTI type...',
      revealing: 'Revealing your character...',
    },
  },
  ko: {
    nav: {
      home: '홈',
      characters: '캐릭터',
      quiz: '퀴즈',
    },
    landing: {
      badge: '오리지널',
      title1: '할로윈',
      title2: '헌터',
      subtitle: 'K-pop Demon Hunters 할로윈 준비 유형 테스트',
      description: '할로윈 스페셜 퀴즈로 당신의 성격과 맞는 전설적인 K-pop 데몬 헌터를 찾아보세요.',
      startButton: '퀴즈 시작',
      moreInfoButton: '자세히 보기',
      new: '새로운',
      year: '2025',
      questions: '12개 질문',
      characters: '10개 캐릭터',
      duration: '3분',
    },
    quiz: {
      of: '/',
      back: '이전',
    },
    result: {
      yourResult: '당신의 결과',
      about: '소개',
      keyTraits: '주요 특성',
      shareResult: '결과 공유',
      retakeQuiz: '다시 하기',
      hunterRole: '헌터 역할:',
      personalityType: '성격 유형:',
      classification: '분류:',
      tags: '태그:',
      moreCharacters: '다른 캐릭터',
      viewAll: '전체 보기',
    },
    gallery: {
      title: '모든 캐릭터',
      analysts: '분석가',
      diplomats: '외교관',
      sentinels: '관리자',
      explorers: '탐험가',
    },
    loading: {
      analyzing: '당신의 데몬 헌터 프로필 분석 중...',
      calculating: 'MBTI 유형 계산 중...',
      revealing: '캐릭터 공개 중...',
    },
  },
};

export function getTranslations(lang: Language): Translations {
  return translations[lang];
}
