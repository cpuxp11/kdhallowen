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

  return `${e_i}${s_n}${t_f}${j_p}`;
}
