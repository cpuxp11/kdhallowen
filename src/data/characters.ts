export interface Character {
  mbti: string;
  name: {
    ko: string;
    en: string;
  };
  role: {
    ko: string;
    en: string;
  };
  imagePath: string;
  bio: {
    ko: string;
    en: string;
  };
  traits: {
    ko: string[];
    en: string[];
  };
  quote: {
    ko: string;
    en: string;
  };
  hunterRole: {
    ko: string;
    en: string;
  };
  halloweenBehavior: {
    ko: string;
    en: string;
  };
}

export const characters: Record<string, Character> = {
  ENFP: {
    mbti: "ENFP",
    name: {
      ko: "조이",
      en: "Joy"
    },
    role: {
      ko: "파티 주최자",
      en: "Party Organizer"
    },
    imagePath: "image/Joy.png",
    bio: {
      ko: "악마 사냥을 축제로 만드는 능력자. 위기를 기회로, 전투를 파티로 바꿈 ㅋㅋ",
      en: "Turns demon hunting into a festival. Crisis? That's just a party in disguise lol"
    },
    traits: {
      ko: ["텐션甲", "아이디어뱅크", "즉흥왕", "긍정바이러스"],
      en: ["Hype Master", "Idea Machine", "Improv King", "Positivity Virus"]
    },
    quote: {
      ko: "악마 사냥도 친구 만들 기회잖아? ㄱㄱ",
      en: "Demon hunting? More like friend-making time. Let's go!"
    },
    hunterRole: {
      ko: "사기 충전기",
      en: "Morale Battery"
    },
    halloweenBehavior: {
      ko: "10월 1일부터 이미 할로윈 모드 돌입! 매일 다른 코스튬 아이디어 떠올리다가 결국 D-1에 전부 섞어서 입음. 집 장식은 과하다 싶을 정도로 화려하게, 근데 정작 사탕은 파티 중에 다 먹어버림 ㅋㅋ 친구들 전부 초대해서 '올해 최고의 할로윈 파티!'라고 SNS에 도배함.",
      en: "Goes full Halloween mode from October 1st! Brainstorms different costume ideas daily, then panic-mixes everything on the last day. House decorations are over-the-top spectacular, but somehow eats all the candy before trick-or-treaters arrive. Invites everyone to 'THE ULTIMATE HALLOWEEN BASH' and live-posts the entire night on social media."
    }
  },
  ENFJ: {
    mbti: "ENFJ",
    name: {
      ko: "피닉스",
      en: "Phoenix"
    },
    role: {
      ko: "팀 엄마",
      en: "Team Mom"
    },
    imagePath: "image/Galaxybird.png",
    bio: {
      ko: "타고난 리더. 팀원들 최고로 만드는 능력자. 끈끈한 유대감으로 어둠을 박살냄.",
      en: "Born leader. Makes everyone their best self. Destroys darkness with team bonding."
    },
    traits: {
      ko: ["카리스마甲", "영감제조기", "체계적", "따뜻함"],
      en: ["Charisma MAX", "Inspiration Factory", "Organized", "Warm AF"]
    },
    quote: {
      ko: "같이 올라가든가, 아니면 아무도 못 올라가든가.",
      en: "We all rise together, or nobody does. Period."
    },
    hunterRole: {
      ko: "단합 사령관",
      en: "Unity Commander"
    },
    halloweenBehavior: {
      ko: "동네 할로윈 파티 총책임자 자처함. 3주 전부터 체크리스트 만들고 단체 코스튬 테마 제안하며 '다같이 어벤져스 하자!' 외침. 누가 소외되지 않도록 전부 챙기고, 파티 끝나면 '올해도 성공적이었어 여러분!' 하며 감동의 마무리 멘트. 근데 정작 본인 코스튬은 전날 밤에 급하게 준비함 ㅋㅋ",
      en: "Volunteers as neighborhood Halloween party coordinator. Creates detailed checklists 3 weeks ahead and rallies everyone for group costumes: 'Let's all be the Avengers!' Makes sure no one feels left out, then delivers an inspiring 'Great job everyone!' speech at the end. Ironically scrambles to finish their own costume the night before lol."
    }
  },
  INFJ: {
    mbti: "INFJ",
    name: {
      ko: "루미",
      en: "Rumi"
    },
    role: {
      ko: "영혼 감지기",
      en: "Soul Reader"
    },
    imagePath: "image/Rumi.png",
    bio: {
      ko: "악마 의도를 미리 읽는 희귀 능력자. 몸이 아니라 영혼을 지킴.",
      en: "Rare ability to read demonic vibes before they attack. Protects souls, not just bodies."
    },
    traits: {
      ko: ["통찰력甲", "원칙주의자", "비전제시러", "미스테리"],
      en: ["Insight King", "Principled AF", "Visionary", "Mysterious Vibes"]
    },
    quote: {
      ko: "어둠이 오기 전에 나는 이미 봤어.",
      en: "I see the darkness before it even shows up."
    },
    hunterRole: {
      ko: "예언 직조자",
      en: "Prophecy Weaver"
    },
    halloweenBehavior: {
      ko: "할로윈을 영혼들과 소통할 수 있는 특별한 날로 여김. 완벽주의라 코스튬 의미까지 다 고려해서 한 달 전부터 준비하는데, 정작 파티 가면 구석에서 사람들 관찰만 함. 사탕 나눠줄 때 아이들 하나하나 눈 맞추며 '조심히 들어가~' 진심 어린 한마디. 할로윈 끝나고 '역시 사람 많은 건 피곤해...' 하며 혼자만의 시간 가짐.",
      en: "Views Halloween as a sacred night to connect with spirits. Perfectionist planning includes researching costume symbolism for weeks, but at the party just observes everyone from the corner. Gives each trick-or-treater genuine eye contact and a heartfelt 'Stay safe out there.' After it's over: 'That was exhausting...' and retreats into solitude for recovery time."
    }
  },
  ENTP: {
    mbti: "ENTP",
    name: {
      ko: "진우",
      en: "Jinwoo"
    },
    role: {
      ko: "실험광",
      en: "Mad Scientist"
    },
    imagePath: "image/Jinwoo.png",
    bio: {
      ko: "정석대로 하면 재미없잖아? 실험적 전술과 기발한 함정으로 즉흥 예술 작품 만듦.",
      en: "Playing by the rules? Boring. Experimental tactics and wild traps make every fight a work of art."
    },
    traits: {
      ko: ["발명왕", "순발력甲", "대담함", "분석왕"],
      en: ["Inventor", "Quick Brain", "Bold AF", "Analyzer"]
    },
    quote: {
      ko: "규칙? 창의적 솔루션이 더 좋은데?",
      en: "Rules? Nah, I prefer creative solutions."
    },
    hunterRole: {
      ko: "전술 파괴자",
      en: "Tactic Breaker"
    },
    halloweenBehavior: {
      ko: "할로윈 코스튬? 그건 예술이 아니라 실험임! 아무도 안 한 독창적인 컨셉 찾다가 '양자역학 호박'이라는 정체불명 코스튬 등장. 집에 정교한 장치 만들어서 사탕 받으려면 퀴즈 풀게 만듦 ㅋㅋ '재밌잖아~' 하는데 애들은 당황. 파티에서 할로윈 전통에 대해 논쟁 시작하다가 분위기 메이커 됨.",
      en: "Halloween costume? That's not fashion, it's EXPERIMENTATION! Searches for concepts no one's tried and shows up as 'Quantum Pumpkin' or something equally baffling. Rigs an elaborate contraption so trick-or-treaters must solve puzzles for candy. 'It's fun!' Kids are confused. At parties, starts debates about Halloween traditions and somehow becomes the entertainment."
    }
  },
  INTJ: {
    mbti: "INTJ",
    name: {
      ko: "미스터리",
      en: "Mystery"
    },
    role: {
      ko: "그림자 참모",
      en: "Shadow Planner"
    },
    imagePath: "image/Mystery.png",
    bio: {
      ko: "악마보다 10수 앞서감. 장기 전략으로 종말 막음. 그림자 속에서 일함.",
      en: "Always 10 steps ahead. Long-term plans prevent apocalypses before they start. Works in shadows."
    },
    traits: {
      ko: ["전략왕", "독립적", "완벽주의자", "비전제시러"],
      en: ["Strategy King", "Independent", "Perfectionist", "Visionary"]
    },
    quote: {
      ko: "위협에 반응 안 해. 미리 제거하지.",
      en: "Don't react to threats. Eliminate them early."
    },
    hunterRole: {
      ko: "미래 설계자",
      en: "Future Architect"
    },
    halloweenBehavior: {
      ko: "할로윈 참여는 비효율적이라고 판단했지만, 어쩔 수 없이 가야 하면 완벽하게 준비함. 코스튬은 역사적 고증 완벽한 중세 전사 갑옷. '대충 하는 건 시간 낭비'라며 3주간 리서치. 파티는 1시간만 있다가 '할 건 다 했으니' 퇴장. 집에선 불 다 끄고 '오늘은 부재중' 팻말 붙여놓음. 근데 몰래 호러 다큐 정주행 중.",
      en: "Deems Halloween participation 'inefficient' but if forced to attend, does it PERFECTLY. Costume: historically accurate medieval armor with flawless research. 'Half-assing wastes time' so spent 3 weeks on it. Stays at party exactly 1 hour: 'Objective complete.' At home, turns off all lights with 'Not Home' sign. But secretly binge-watches horror documentaries."
    }
  },
  ESFP: {
    mbti: "ESFP",
    name: {
      ko: "로맨스",
      en: "Romance"
    },
    role: {
      ko: "쇼 메이커",
      en: "Show Maker"
    },
    imagePath: "image/Romance.png",
    bio: {
      ko: "악마 사냥을 볼거리로 만듦. 두려움 모르는 에너지와 반사신경으로 쇼 찢음.",
      en: "Turns demon hunting into entertainment. Fearless energy + instant reflexes = the show."
    },
    traits: {
      ko: ["즉흥왕", "에너지甲", "대담함", "재미추구러"],
      en: ["Improv King", "Energy Bomb", "Bold AF", "Fun Chaser"]
    },
    quote: {
      ko: "인생 짧은데 지루한 싸움은 패스!",
      en: "Life's too short for boring fights. Let's make it fun!"
    },
    hunterRole: {
      ko: "전투 엔터테이너",
      en: "Combat Entertainer"
    },
    halloweenBehavior: {
      ko: "할로윈은 인생 최고의 날! 오전부터 코스튬 입고 돌아다니며 '오늘은 내가 주인공!' 외침. 파티 3개 동시 참석하면서 인스타 스토리 50개 올림 ㅋㅋ 사탕 나눠주는 것도 퍼포먼스처럼 하고, 애들이랑 같이 춤추고 사진 찍음. 새벽 3시까지 놀다가 '올해도 레전드였다!' SNS에 감상평 남기고 5시간 뒤 출근함.",
      en: "Halloween = BEST DAY EVER! Wears costume from morning, strutting around yelling 'Today I'm the STAR!' Hits 3 parties in one night, posts 50+ Instagram stories. Hands out candy like a theatrical performance, dances with kids, takes a million photos. Parties till 3 AM, posts 'THIS WAS LEGENDARY!' then somehow shows up to work 5 hours later."
    }
  },
  ISFP: {
    mbti: "ISFP",
    name: {
      ko: "베이비",
      en: "Baby"
    },
    role: {
      ko: "미적 전사",
      en: "Aesthetic Warrior"
    },
    imagePath: "image/Baby.png",
    bio: {
      ko: "악마 사냥도 예술임. 모든 공격이 우아하고 모든 함정이 작품. 아름다움과 잔인함의 공존.",
      en: "Demon hunting is art. Every strike is graceful, every trap a masterpiece. Beauty meets brutality."
    },
    traits: {
      ko: ["예술가", "부드러움", "적응력甲", "관찰자"],
      en: ["Artist", "Gentle Soul", "Adaptable", "Observer"]
    },
    quote: {
      ko: "악마 잡는다고 영혼까지 잃을 순 없지.",
      en: "Fighting demons doesn't mean losing your soul."
    },
    hunterRole: {
      ko: "우아한 전사",
      en: "Grace Warrior"
    },
    halloweenBehavior: {
      ko: "할로윈 코스튬은 예술 작품임! 한 달 내내 DIY하면서 디테일에 집착. 빈티지한 느낌 살리려고 직접 염색하고 바느질함. 인스타에는 감성 있는 할로윈 사진만 올리고 '오늘 분위기 좋다~' 하며 조용히 즐김. 파티보다는 소수 친구들이랑 아늑하게 영화 보는 게 더 좋음. 집 장식도 무섭기보단 예쁘게.",
      en: "Halloween costume = ART PROJECT! Spends the entire month DIY-ing with obsessive attention to detail. Hand-dyes and stitches for that perfect vintage vibe. Instagram features only aesthetic Halloween shots with captions like 'Such good vibes tonight~' Prefers cozy movie nights with a few close friends over big parties. House decor is pretty, not scary."
    }
  },
  ESFJ: {
    mbti: "ESFJ",
    name: {
      ko: "애비",
      en: "Abby"
    },
    role: {
      ko: "방패막이",
      en: "Shield Bearer"
    },
    imagePath: "image/Abby.png",
    bio: {
      ko: "보호 본능이 팀의 심장. 모두를 무사히 집에 보냄. 팀원은 가족임.",
      en: "Protective instincts = team's heartbeat. Everyone gets home safe. Squad is family."
    },
    traits: {
      ko: ["케어왕", "충성도甲", "체계적", "서포터"],
      en: ["Care King", "Loyal AF", "Organized", "Support Master"]
    },
    quote: {
      ko: "아무도 버리고 안 가. 내가 있는 한.",
      en: "Nobody gets left behind. Not on my watch."
    },
    hunterRole: {
      ko: "방패 담당",
      en: "Shield Master"
    },
    halloweenBehavior: {
      ko: "동네 엄마 역할 자처! 2주 전부터 단체 코스튬 조율하고 '다들 뭐 입을 거야~?' 물어봄. 알레르기 고려해서 사탕 여러 종류 준비하고, 애들 안전하게 다니는지 체크. 파티에선 음식 준비하고 설거지까지 도맡아 함 ㅋㅋ '다들 재밌게 놀았으면 좋겠어!' 하며 뿌듯해하고, 다음날 단체 채팅에 '어제 재밌었지?' 인증샷 올림.",
      en: "Neighborhood mom energy ACTIVATED! Two weeks early, coordinates group costumes asking 'What's everyone wearing~?' Prepares multiple candy types for allergies, monitors kids' safety routes. At parties, handles food prep AND dishes lol. 'I hope everyone had fun!' with genuine satisfaction. Next day: posts group photos in the chat 'Wasn't yesterday great?'"
    }
  },
  ISTP: {
    mbti: "ISTP",
    name: {
      ko: "미라",
      en: "Mira"
    },
    role: {
      ko: "무기 장인",
      en: "Weapon Crafter"
    },
    imagePath: "image/Mira.png",
    bio: {
      ko: "전설의 무기 제작자. 손재주로 악마 사냥 도구 만듦. 모든 사냥에서 필수.",
      en: "Legendary weapon smith. Hands-on skills build demon-slaying tools. Essential for every hunt."
    },
    traits: {
      ko: ["실용적", "독립적", "논리왕", "만능러"],
      en: ["Practical", "Independent", "Logic King", "Resourceful"]
    },
    quote: {
      ko: "10분이랑 부품만 줘. 뭐든 만들어줄게.",
      en: "Give me 10 minutes and spare parts. I'll make anything."
    },
    hunterRole: {
      ko: "무기고 엔지니어",
      en: "Arsenal Engineer"
    },
    halloweenBehavior: {
      ko: "할로윈? 어제 아마존에서 원클릭으로 코스튬 주문 끝. 파티 가기보단 차고에서 호박에 LED 장치 개조하는 게 더 재밌음 ㅋㅋ 사탕 나눠주는 거 귀찮아서 그냥 바구니 문 앞에 두고 '알아서 가져가세요' 쪽지 붙임. 근데 몰래 집에 자동 사탕 배분 장치 만들어 놓고 CCTV로 관찰 중.",
      en: "Halloween? One-click Amazon costume order yesterday. Done. More fun modifying pumpkins with LED rigs in the garage than parties lol. Too lazy to hand out candy—leaves a bowl with 'Take one please' note. But secretly built an automated candy dispenser and monitors it via security cam for the data."
    }
  },
  ISTJ: {
    mbti: "ISTJ",
    name: {
      ko: "버피",
      en: "Buffy"
    },
    role: {
      ko: "파티 PM",
      en: "Party Project Manager"
    },
    imagePath: "image/Buffy.png",
    bio: {
      ko: "10월 1일부터 할로윈 준비 시작하는 극T. 코스튬 2벌 주문(배송 실패 대비), 사탕 120% 구매, 파티 타임테이블 엑셀 관리. 친구들 '너 때문에 파티 굴러간다' 하지만 본인은 '당연한 거 아냐?' 생각.",
      en: "Starts Halloween prep on October 1st. Orders 2 costumes from Amazon (backup plan for shipping fails), buys 120% more candy than needed, manages party timeline in Google Sheets. Friends say 'This party only works because of you' but genuinely thinks 'Isn't this just basic responsibility?'"
    },
    traits: {
      ko: ["D-30 시작형", "예산초과불가", "체크리스트왕", "정리가진짜"],
      en: ["October 1st Starter", "Budget Enforcer", "Checklist Addict", "Cleanup Champion"]
    },
    quote: {
      ko: "일정 공유했는데 왜 안 읽어?",
      en: "Did you not read the shared calendar?"
    },
    hunterRole: {
      ko: "파티 총무",
      en: "Party Treasurer"
    },
    halloweenBehavior: {
      ko: "D-30일 예산 엑셀 작성(12명×1.5만원), D-20일 코스튬 주문, D-7일 체크리스트 12개 완성. 파티 당일 3시간 전 도착해서 음식 배치, 조명 테스트, 휴지 보충 완료. 친구가 '너무 일찍 온 거 아냐?' 하면 '공유한 일정 안 읽었어?' 반문. 파티 끝나고 혼자 남아 정리하며 '다들 즐거워했네...' 조용히 미소 짓는 게 제일 행복.",
      en: "D-30: Creates budget spreadsheet (12 guests × $20), D-20: Orders costume (10-day shipping accounted for), D-7: Completes 12-item checklist. Arrives 3 hours early on party day to arrange snacks, test lighting, refill bathroom TP. When friends ask 'Aren't you way too early?' responds 'Did you not read the shared calendar?' Stays after everyone leaves to clean up, quietly smiling 'Everyone had fun...' - that's the real win."
    }
  }
};
