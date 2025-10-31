// Available character MBTI types
const AVAILABLE_TYPES = [
  'ENFP', 'ENFJ', 'INFJ', 'ENTP', 'INTJ',
  'ESFP', 'ISFP', 'ESFJ', 'ISTP', 'ISTJ'
];

// Find closest matching MBTI type
function findClosestMBTI(targetType: string): string {
  if (AVAILABLE_TYPES.includes(targetType)) {
    return targetType;
  }

  // Calculate similarity score (number of matching letters)
  let bestMatch = AVAILABLE_TYPES[0];
  let bestScore = 0;

  for (const availableType of AVAILABLE_TYPES) {
    let score = 0;
    for (let i = 0; i < 4; i++) {
      if (targetType[i] === availableType[i]) {
        score++;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = availableType;
    }
  }

  return bestMatch;
}

export function calculateMBTI(answers: string[]): string {
  // Count scores for each dichotomy
  const counts: Record<string, number> = {};

  answers.forEach(answer => {
    counts[answer] = (counts[answer] || 0) + 1;
  });

  // Determine each dimension (with tie-breaking to I, N, F, P as per PRD)
  const e_i = (counts['E'] || 0) > (counts['I'] || 0) ? 'E' : 'I';
  const s_n = (counts['S'] || 0) > (counts['N'] || 0) ? 'S' : 'N';
  const t_f = (counts['T'] || 0) > (counts['F'] || 0) ? 'T' : 'F';
  const j_p = (counts['J'] || 0) > (counts['P'] || 0) ? 'J' : 'P';

  const calculatedType = `${e_i}${s_n}${t_f}${j_p}`;

  // Return closest matching type if calculated type doesn't exist
  return findClosestMBTI(calculatedType);
}
