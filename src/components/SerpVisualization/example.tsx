/**
 * Example usage of SerpVisualization component
 * 
 * This file demonstrates how to use the SerpVisualization component
 * with sample SERP data. You can integrate this into your recherches page
 * or any other page that needs to display SERP analytics.
 */

import SerpVisualization from './index';
import { SerpData } from '@/types/SerpData';

// Example SERP data
const exampleSerpData: SerpData = {
  keyword: 'photography techniques',
  totalResults: 20,
  date: '2024-01-15',
  results: [
    { position: 1, title: '10 Essential Photography Techniques', url: 'https://example.com/1', domain: 'example.com', type: 'organic', searchIntent: 'informational' },
    { position: 2, title: 'Advanced Photography Tips', url: 'https://example.com/2', domain: 'example.com', type: 'organic', searchIntent: 'informational' },
    { position: 3, title: 'Best Camera for Photography', url: 'https://example.com/3', domain: 'example.com', type: 'organic', searchIntent: 'commercial' },
    { position: 4, title: 'Photography Course Online', url: 'https://example.com/4', domain: 'example.com', type: 'organic', searchIntent: 'transactional' },
    { position: 5, title: 'Photography Techniques Video', url: 'https://example.com/5', domain: 'youtube.com', type: 'video', searchIntent: 'informational' },
    { position: 6, title: 'Photography Blog', url: 'https://example.com/6', domain: 'example.com', type: 'organic', searchIntent: 'informational' },
    { position: 7, title: 'Buy Photography Equipment', url: 'https://example.com/7', domain: 'shop.com', type: 'organic', searchIntent: 'transactional' },
    { position: 8, title: 'Photography Gallery', url: 'https://example.com/8', domain: 'example.com', type: 'image', searchIntent: 'informational' },
    { position: 9, title: 'Photography News', url: 'https://example.com/9', domain: 'news.com', type: 'news', searchIntent: 'informational' },
    { position: 10, title: 'Local Photography Studio', url: 'https://example.com/10', domain: 'local.com', type: 'local', searchIntent: 'navigational' },
  ],
  searchIntents: [
    { intent: 'informational', count: 6, percentage: 60 },
    { intent: 'commercial', count: 1, percentage: 10 },
    { intent: 'transactional', count: 2, percentage: 20 },
    { intent: 'navigational', count: 1, percentage: 10 },
  ],
};

export default function SerpVisualizationExample() {
  return <SerpVisualization data={exampleSerpData} />;
}

