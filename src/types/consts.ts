export const AGE_PRESETS = {
  'All Ages': 0,
  '12+': 12,
  '16+': 16,
  '20+': 20,
} as const;

export type AgePreset = keyof typeof AGE_PRESETS;
