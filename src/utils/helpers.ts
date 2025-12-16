import type { Experience } from '../types/types';

export function experienceSupportsAge(experience: Experience, age: number): boolean {
  return experience.pricing.some((tier) => {
    const min = tier.minAge;
    const max = tier.maxAge ?? Infinity;
    return age >= min && age <= max;
  });
}

export const resolveImage = (path: string) => {
  return new URL(`../assets/${path}`, import.meta.url).href;
};
