import type { AgePreset } from './consts';

export interface SearchParams {
  category: string | null;
  ageCategory: AgePreset | null;
  dateRange: Date[] | null;
  participants: number | null;
}

export interface PricingTier {
  label: string;
  ageRange: string;
  minAge: number;
  maxAge?: number;
  price: number;
}

export interface Experience {
  id: number;
  title: string;
  category: string;
  image: string;
  description: {
    type: string;
    content: string;
  };
  pricing: PricingTier[];
  addons: {
    id: string;
    name: string;
    description: string;
    price: number;
  }[];
}
