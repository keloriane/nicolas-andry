'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { SerpData, SearchIntent } from '@/types/SerpData';

const Container = styled.div`
  width: 100%;
  padding: 40px 20px;
  background-color: ${theme.colors.white};
`;

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 40px;
  margin-top: 40px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ChartContainer = styled.div`
  background-color: ${theme.colors.white};
  padding: 30px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const ChartTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${theme.colors.black};
  margin-bottom: 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: ${theme.colors.black};
  text-align: center;
  margin-bottom: 10px;
`;

const SectionSubtitle = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 40px;
`;

const COLORS = [
  theme.colors.orange,
  theme.colors.orangeDarker,
  theme.colors.orangeL,
  '#8B4513',
  '#A0522D',
];

const INTENT_COLORS: Record<SearchIntent, string> = {
  informational: theme.colors.orange,
  navigational: theme.colors.orangeDarker,
  transactional: theme.colors.orangeL,
  commercial: '#8B4513',
};

const INTENT_LABELS: Record<SearchIntent, string> = {
  informational: 'Informational',
  navigational: 'Navigational',
  transactional: 'Transactional',
  commercial: 'Commercial',
};

interface SerpVisualizationProps {
  data: SerpData;
}

const SerpVisualization: React.FC<SerpVisualizationProps> = ({ data }) => {
  // Prepare data for position distribution chart
  const positionData = data.results.reduce((acc, result) => {
    const range = result.position <= 3 ? '1-3' : result.position <= 10 ? '4-10' : '11-20';
    const existing = acc.find((item) => item.range === range);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ range, count: 1 });
    }
    return acc;
  }, [] as { range: string; count: number }[]);

  // Prepare data for result type distribution
  const typeData = data.results.reduce((acc, result) => {
    const existing = acc.find((item) => item.type === result.type);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ type: result.type, count: 1 });
    }
    return acc;
  }, [] as { type: string; count: number }[]);

  // Prepare search intent data for pie chart
  const intentData = data.searchIntents.map((intent) => ({
    name: INTENT_LABELS[intent.intent],
    value: intent.percentage,
    count: intent.count,
    fill: INTENT_COLORS[intent.intent],
  }));

  // Prepare search intent data for bar chart
  const intentBarData = data.searchIntents.map((intent) => ({
    intent: INTENT_LABELS[intent.intent],
    count: intent.count,
    percentage: intent.percentage,
    fill: INTENT_COLORS[intent.intent],
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: theme.colors.white,
            padding: '10px',
            border: `1px solid ${theme.colors.orange}`,
            borderRadius: '4px',
          }}
        >
          <p style={{ margin: 0, color: theme.colors.black }}>
            {payload[0].name || payload[0].payload.intent || payload[0].payload.range}:{' '}
            {payload[0].value}
            {payload[0].payload.count !== undefined && ` (${payload[0].payload.count} results)`}
            {payload[0].payload.percentage !== undefined && `%`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Container>
      <SectionTitle>SERP Analysis</SectionTitle>
      <SectionSubtitle>
        Keyword: {data.keyword} | Total Results: {data.totalResults}
        {data.date && ` | Date: ${data.date}`}
      </SectionSubtitle>

      <ChartsGrid>
        {/* Search Intent Dominance Pie Chart */}
        <ChartContainer>
          <ChartTitle>Search Intent Dominance</ChartTitle>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={intentData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percentage }) => `${name}: ${percentage}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {intentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>

        {/* Search Intent Dominance Bar Chart */}
        <ChartContainer>
          <ChartTitle>Search Intent Distribution</ChartTitle>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={intentBarData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="intent" stroke={theme.colors.black} />
              <YAxis stroke={theme.colors.black} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="percentage" fill={theme.colors.orange} name="Percentage (%)" />
              <Bar dataKey="count" fill={theme.colors.orangeDarker} name="Count" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        {/* Position Distribution Chart */}
        <ChartContainer>
          <ChartTitle>Results by Position Range</ChartTitle>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={positionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="range" stroke={theme.colors.black} />
              <YAxis stroke={theme.colors.black} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="count" fill={theme.colors.orange} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        {/* Result Type Distribution */}
        <ChartContainer>
          <ChartTitle>Results by Type</ChartTitle>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={typeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="type" stroke={theme.colors.black} />
              <YAxis stroke={theme.colors.black} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="count" fill={theme.colors.orangeDarker} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </ChartsGrid>
    </Container>
  );
};

export default SerpVisualization;

