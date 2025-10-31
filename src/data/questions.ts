export interface QuizOption {
  emoji: string;
  label: string;
  description: string;
  score: string;
}

export interface Question {
  id: string;
  dichotomy: string;
  emoji: string;
  text: string;
  optionA: QuizOption;
  optionB: QuizOption;
}

export const questions: Question[] = [
  {
    id: "q1",
    dichotomy: "E/I",
    emoji: "🎭",
    text: "You walk into the Halloween party wearing",
    optionA: {
      emoji: "🧨",
      label: "Glow-in-the-dark stage outfit",
      description: "Maximum visibility, ready to perform!",
      score: "E"
    },
    optionB: {
      emoji: "🦇",
      label: "Hand-sewn vampire cloak",
      description: "Intricate details, hidden pockets for snacks.",
      score: "I"
    }
  },
  {
    id: "q2",
    dichotomy: "E/I",
    emoji: "🎪",
    text: "At the party, you're most likely to",
    optionA: {
      emoji: "🎤",
      label: "Start a TikTok dance challenge",
      description: "Get everyone involved, center stage energy!",
      score: "E"
    },
    optionB: {
      emoji: "🎭",
      label: "Quiet tarot readings with besties",
      description: "Cozy corner, deep convos, selective vibes.",
      score: "I"
    }
  },
  {
    id: "q3",
    dichotomy: "S/N",
    emoji: "👻",
    text: "Costume contest says \"be creative.\" You show up as",
    optionA: {
      emoji: "🎃",
      label: "Jack-o'-lantern mech suit",
      description: "Literal, detailed, engineered perfection!",
      score: "S"
    },
    optionB: {
      emoji: "🕯️",
      label: "\"The Spirit of Midnight\"",
      description: "Abstract concept with LED fog effects.",
      score: "N"
    }
  },
  {
    id: "q4",
    dichotomy: "S/N",
    emoji: "🏚️",
    text: "Someone says this haunted house is cursed. You",
    optionA: {
      emoji: "🪦",
      label: "Look for the hidden wires",
      description: "There's always a technical explanation!",
      score: "S"
    },
    optionB: {
      emoji: "👁️",
      label: "Whisper dramatically",
      description: "\"What if it's trying to tell us something\"",
      score: "N"
    }
  },
  {
    id: "q5",
    dichotomy: "T/F",
    emoji: "⚔️",
    text: "Your bestie dares you to hunt demons. You ask",
    optionA: {
      emoji: "🔍",
      label: "\"What's the plan and weapons?\"",
      description: "Need strategy, backup plans, exit routes!",
      score: "T"
    },
    optionB: {
      emoji: "🫶",
      label: "\"Will anyone get hurt?\"",
      description: "What if the demon is just misunderstood?",
      score: "F"
    }
  },
  {
    id: "q6",
    dichotomy: "T/F",
    emoji: "🗺️",
    text: "The squad can't agree on next move. You",
    optionA: {
      emoji: "⚔️",
      label: "Pick the logical route",
      description: "Analyze pros/cons, explain reasoning clearly.",
      score: "T"
    },
    optionB: {
      emoji: "🧸",
      label: "Find a compromise",
      description: "Keep vibes chill, make sure everyone's happy.",
      score: "F"
    }
  },
  {
    id: "q7",
    dichotomy: "J/P",
    emoji: "🎒",
    text: "Your demon-hunting gear is",
    optionA: {
      emoji: "📦",
      label: "Packed 3 days early",
      description: "Color-coded, labeled, checklist complete!",
      score: "J"
    },
    optionB: {
      emoji: "🎲",
      label: "Tossed together last minute",
      description: "Chaotic but somehow perfectly improvised.",
      score: "P"
    }
  },
  {
    id: "q8",
    dichotomy: "J/P",
    emoji: "🌀",
    text: "Three mysterious paths in the haunted maze. You",
    optionA: {
      emoji: "🧭",
      label: "Choose fast, stick to plan",
      description: "Commit to a strategy and execute!",
      score: "J"
    },
    optionB: {
      emoji: "🌀",
      label: "Wander til you \"feel it\"",
      description: "Trust your instincts, see what happens!",
      score: "P"
    }
  }
];
