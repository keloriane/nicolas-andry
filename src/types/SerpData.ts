export interface SerpResult {
  position: number;
  title: string;
  url: string;
  domain: string;
  type: 'organic' | 'featured' | 'video' | 'image' | 'news' | 'local';
  searchIntent?: SearchIntent;
}

export type SearchIntent = 'informational' | 'navigational' | 'transactional' | 'commercial';

export interface SearchIntentData {
  intent: SearchIntent;
  count: number;
  percentage: number;
}

export interface SerpData {
  keyword: string;
  results: SerpResult[];
  searchIntents: SearchIntentData[];
  totalResults: number;
  date?: string;
}

