export interface QuizOption {
  emoji: string;
  label: {
    ko: string;
    en: string;
  };
  description: {
    ko: string;
    en: string;
  };
  score: string;
}

export interface Question {
  id: string;
  dichotomy: string;
  emoji: string;
  text: {
    ko: string;
    en: string;
  };
  optionA: QuizOption;
  optionB: QuizOption;
}

export const questions: Question[] = [
  // E/I Questions (3 questions)
  {
    id: "q1",
    dichotomy: "E/I",
    emoji: "🎭",
    text: {
      ko: "할로윈 파티 초대받았을 때 당신의 첫 반응은?",
      en: "When you get invited to a Halloween party, what's your first reaction?"
    },
    optionA: {
      emoji: "🎉",
      label: {
        ko: "바로 단톡에 \"애들아 우리 뭐 입을까?\"라고 물어본다",
        en: "Immediately text the group chat \"What should we all wear?\""
      },
      description: {
        ko: "20개 메시지 연속 발사하며 단체 코디 기획",
        en: "20 messages deep planning matching group costumes"
      },
      score: "E"
    },
    optionB: {
      emoji: "🤔",
      label: {
        ko: "조용히 Pinterest 보드 만들며 혼자 리서치한다",
        en: "Quietly create Pinterest boards and research alone"
      },
      description: {
        ko: "나만의 은밀한 코디 구상 타임",
        en: "Secret solo costume planning session"
      },
      score: "I"
    }
  },
  {
    id: "q2",
    dichotomy: "E/I",
    emoji: "🎃",
    text: {
      ko: "할로윈 파티장에 도착했을 때 당신은 어떻게 행동하나요?",
      en: "When you arrive at the Halloween party, how do you act?"
    },
    optionA: {
      emoji: "📸",
      label: {
        ko: "입구에서부터 모르는 사람들한테도 \"코디 너무 예뻐요!\" 하면서 셀카 찍는다",
        en: "Start complimenting strangers' costumes and taking group selfies at the entrance"
      },
      description: {
        ko: "5분 안에 인스타 스토리 5개 업로드",
        en: "5 Instagram stories uploaded within 5 minutes"
      },
      score: "E"
    },
    optionB: {
      emoji: "🍿",
      label: {
        ko: "먼저 와있는 친한 친구 찾아서 조용히 합류한다",
        en: "Find the close friends who arrived first and quietly join them"
      },
      description: {
        ko: "아는 사람들이랑만 깊은 대화 모드",
        en: "Deep conversation mode with familiar faces only"
      },
      score: "I"
    }
  },
  {
    id: "q3",
    dichotomy: "E/I",
    emoji: "👥",
    text: {
      ko: "할로윈 파티에서 에너지를 어떻게 충전하나요?",
      en: "How do you recharge your energy at a Halloween party?"
    },
    optionA: {
      emoji: "🎤",
      label: {
        ko: "사람들이 많을수록 신나서 더 활발하게 돌아다닌다",
        en: "The more people, the more energized - you mingle everywhere"
      },
      description: {
        ko: "\"한 명이라도 더 만나야지!\" 네트워킹 모드",
        en: "\"Let me meet one more person!\" networking mode ON"
      },
      score: "E"
    },
    optionB: {
      emoji: "🌙",
      label: {
        ko: "사람 많으면 잠깐 밖에 나가서 쉬었다 들어온다",
        en: "Need to step outside for a breather when it gets too crowded"
      },
      description: {
        ko: "혼자만의 재충전 타임이 필요함",
        en: "Need solo recharge time to keep going"
      },
      score: "I"
    }
  },

  // S/N Questions (3 questions)
  {
    id: "q4",
    dichotomy: "S/N",
    emoji: "👻",
    text: {
      ko: "할로윈 코스튬을 고를 때 당신이 가장 중요하게 생각하는 건?",
      en: "When choosing your Halloween costume, what matters most to you?"
    },
    optionA: {
      emoji: "✂️",
      label: {
        ko: "\"원작과 똑같이!\" 디테일 하나하나 완벽하게 재현하는 것",
        en: "\"Exactly like the original!\" Recreating every detail perfectly"
      },
      description: {
        ko: "영화 캡처본 보면서 소품까지 그대로",
        en: "Screenshot references for 100% accuracy with props"
      },
      score: "S"
    },
    optionB: {
      emoji: "💡",
      label: {
        ko: "\"아무도 생각 못 한 컨셉!\" 독창적이고 추상적인 아이디어",
        en: "\"Nobody's done this!\" Original and abstract concept"
      },
      description: {
        ko: "\"실존적 공포를 의인화\" 같은 철학적 코스튬",
        en: "Philosophical costume like \"personified existential dread\""
      },
      score: "N"
    }
  },
  {
    id: "q5",
    dichotomy: "S/N",
    emoji: "🎬",
    text: {
      ko: "공포 영화를 볼 때 당신은 무엇에 집중하나요?",
      en: "When watching horror movies, what do you focus on?"
    },
    optionA: {
      emoji: "🔍",
      label: {
        ko: "\"저기 CG 티 나네\", \"저 상황은 현실적으로 말이 안 되는데\" 같은 오류들",
        en: "\"That CGI is so fake\", \"That situation makes no sense\" - technical flaws"
      },
      description: {
        ko: "논리적 허점과 현실성 체크가 더 재밌음",
        en: "Finding plot holes and realism issues is half the fun"
      },
      score: "S"
    },
    optionB: {
      emoji: "🌙",
      label: {
        ko: "\"저 유령은 왜 나타났을까?\", \"감독이 숨겨둔 메시지는?\" 같은 뒷이야기",
        en: "\"Why did that ghost appear?\", \"What's the hidden message?\" - deeper meaning"
      },
      description: {
        ko: "상징과 숨은 의미 파헤치기에 몰입",
        en: "Analyzing symbolism and hidden meanings deeply"
      },
      score: "N"
    }
  },
  {
    id: "q6",
    dichotomy: "S/N",
    emoji: "🏚️",
    text: {
      ko: "친구가 \"이 흉가는 진짜 귀신이 나온대\"라고 말하면?",
      en: "Your friend says \"This haunted house is actually haunted.\" You think:"
    },
    optionA: {
      emoji: "🔦",
      label: {
        ko: "\"어디 한번 볼까?\" 하면서 숨겨진 장치와 트릭을 찾아본다",
        en: "\"Let me check\" and start looking for hidden devices and tricks"
      },
      description: {
        ko: "\"분명 어딘가에 스피커 있을 거야\"",
        en: "\"There must be speakers hidden somewhere\""
      },
      score: "S"
    },
    optionB: {
      emoji: "👁️",
      label: {
        ko: "\"혹시 이 집에 무슨 사연이...?\" 하면서 상상의 나래를 펼친다",
        en: "\"What if there's a tragic backstory...?\" and let imagination run wild"
      },
      description: {
        ko: "\"100년 전 이 집에서 무슨 일이...\"",
        en: "\"100 years ago in this house something happened...\""
      },
      score: "N"
    }
  },

  // T/F Questions (3 questions)
  {
    id: "q7",
    dichotomy: "T/F",
    emoji: "🍬",
    text: {
      ko: "사탕을 나눠줄 때 울고 있는 아이를 만나면 어떻게 하나요?",
      en: "When handing out candy, you encounter a crying child. What do you do?"
    },
    optionA: {
      emoji: "🎯",
      label: {
        ko: "\"부모님은 어디 계세요? 길 잃으셨어요?\" 하며 상황부터 파악한다",
        en: "\"Where are your parents? Are you lost?\" - assess the situation first"
      },
      description: {
        ko: "문제의 원인 파악하고 효율적으로 해결",
        en: "Identify the problem and solve it efficiently"
      },
      score: "T"
    },
    optionB: {
      emoji: "🫂",
      label: {
        ko: "\"괜찮아? 무슨 일이야?\" 하며 일단 위로하고 사탕을 더 준다",
        en: "\"Are you okay? What happened?\" - comfort first and give extra candy"
      },
      description: {
        ko: "감정적 안정부터 챙겨주고 싶음",
        en: "Emotional comfort comes before anything else"
      },
      score: "F"
    }
  },
  {
    id: "q8",
    dichotomy: "T/F",
    emoji: "🎪",
    text: {
      ko: "친구가 \"할로윈 코디 망했어... 나만 이상해\"라고 우울해하면?",
      en: "Your friend is sad saying \"My costume is a disaster... I look weird.\" You say:"
    },
    optionA: {
      emoji: "🛠️",
      label: {
        ko: "\"이 부분만 이렇게 고치면 훨씬 나아 보일 것 같은데?\" 하며 개선 방안을 제시한다",
        en: "\"If we fix this part like this, it'll look way better\" - provide improvement solutions"
      },
      description: {
        ko: "구체적인 해결책으로 실질적 도움 주기",
        en: "Give practical help with specific solutions"
      },
      score: "T"
    },
    optionB: {
      emoji: "💕",
      label: {
        ko: "\"무슨 소리야! 진짜 너무 잘 어울리는데? 너무 예뻐!\" 하며 일단 기분부터 풀어준다",
        en: "\"What?! It looks amazing on you! So pretty!\" - boost their mood first"
      },
      description: {
        ko: "자존감 회복시켜주는 게 최우선",
        en: "Restoring their confidence is top priority"
      },
      score: "F"
    }
  },
  {
    id: "q9",
    dichotomy: "T/F",
    emoji: "🎯",
    text: {
      ko: "파티에서 누군가 당신의 코스튬을 \"좀 이상한데?\"라고 평가하면?",
      en: "Someone at the party says your costume is \"kinda weird.\" You think:"
    },
    optionA: {
      emoji: "🤷",
      label: {
        ko: "\"뭐가 이상한지 구체적으로 말해봐. 다음엔 참고할게\" 하며 피드백을 받는다",
        en: "\"What specifically is weird? I'll note it for next time\" - take the feedback"
      },
      description: {
        ko: "객관적 평가로 받아들이고 개선점 찾기",
        en: "Accept it objectively and find improvement areas"
      },
      score: "T"
    },
    optionB: {
      emoji: "😢",
      label: {
        ko: "속으로 \"나 진짜 이상해 보이나...\" 하며 기분이 상한다",
        en: "Feel hurt inside thinking \"Do I really look that weird...\""
      },
      description: {
        ko: "평가가 아니라 상처로 받아들여짐",
        en: "Feels like personal criticism, not just feedback"
      },
      score: "F"
    }
  },

  // J/P Questions (3 questions)
  {
    id: "q10",
    dichotomy: "J/P",
    emoji: "🛒",
    text: {
      ko: "할로윈 코스튬 준비는 보통 언제 시작하나요?",
      en: "When do you usually start preparing your Halloween costume?"
    },
    optionA: {
      emoji: "📋",
      label: {
        ko: "9월 초부터 \"배송 지연 있을 수도 있으니까\" 하며 미리 주문 완료한다",
        en: "Early September - \"accounting for shipping delays\" - order everything early"
      },
      description: {
        ko: "체크리스트 만들고 단계별로 준비",
        en: "Make checklist and prepare step by step"
      },
      score: "J"
    },
    optionB: {
      emoji: "⚡",
      label: {
        ko: "파티 당일 3시간 전에 \"뭐 있겠지\" 하며 다이소 돌격한다",
        en: "3 hours before party - \"I'll figure it out\" - rush to dollar store"
      },
      description: {
        ko: "즉흥적으로 만들어도 어떻게든 됨",
        en: "Somehow it all works out with improvisation"
      },
      score: "P"
    }
  },
  {
    id: "q11",
    dichotomy: "J/P",
    emoji: "🗓️",
    text: {
      ko: "할로윈 주말에 파티 초대가 3개나 들어왔을 때 어떻게 하나요?",
      en: "You have 3 Halloween party invitations for one weekend. What do you do?"
    },
    optionA: {
      emoji: "📅",
      label: {
        ko: "캘린더에 시간대별로 정리하고 동선 짜서 코디별 계획을 세운다",
        en: "Organize in calendar by timeline, plan routes and costumes for each party"
      },
      description: {
        ko: "\"17시-19시 A파티, 20시-22시 B파티...\"",
        en: "\"5-7pm Party A, 8-10pm Party B...\""
      },
      score: "J"
    },
    optionB: {
      emoji: "🎲",
      label: {
        ko: "일단 다 \"갈게!\"라고 답하고 당일 기분 따라서 움직인다",
        en: "Say \"I'll be there!\" to all and decide on the day based on mood"
      },
      description: {
        ko: "\"그때 가서 생각하면 되지 뭐\"",
        en: "\"I'll figure it out when the time comes\""
      },
      score: "P"
    }
  },
  {
    id: "q12",
    dichotomy: "J/P",
    emoji: "📦",
    text: {
      ko: "할로윈 파티 준비물을 챙길 때 당신의 스타일은?",
      en: "What's your style when packing for a Halloween party?"
    },
    optionA: {
      emoji: "📝",
      label: {
        ko: "\"코스튬, 메이크업, 여분 옷, 간식...\" 하며 리스트 보고 하나씩 체크한다",
        en: "\"Costume, makeup, backup clothes, snacks...\" check items one by one from list"
      },
      description: {
        ko: "가방 안도 칸별로 정리정돈 완벽",
        en: "Bag organized perfectly with compartments"
      },
      score: "J"
    },
    optionB: {
      emoji: "🎒",
      label: {
        ko: "\"에이 대충 넣어도 되겠지\" 하며 보이는 대로 가방에 쑤셔넣는다",
        en: "\"Eh, it'll be fine\" and stuff things randomly into the bag"
      },
      description: {
        ko: "가방 속은 혼돈이지만 필요한 건 다 있음",
        en: "Chaotic bag but somehow has everything needed"
      },
      score: "P"
    }
  }
];
