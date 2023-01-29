import React from 'react';
import './App.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import { COLORS, generateSalesChartData, generateSalaryChartData } from './utils';
import { LineChart } from './components/LineChart'
import { BarChart } from './components/BarChart'
import { PieChart } from './components/PieChart';
import { ScatterChart } from './components/ScatterChart';
import { BubbleChart } from './components/BubbleChart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement, // Line chart
  BarElement, // Bar chart
  ArcElement, // Pie chart
  Title,
  Tooltip,
  Legend
);

const comparableChartData = generateSalesChartData();
const distributedChartData = generateSalaryChartData();

export default function App() {
  return (
    <div className="app">
      <h2>Visualising data comparison</h2>
      <LineChart
        data={comparableChartData}
      />
      <BarChart
        data={comparableChartData}
      />
      <PieChart
        data={{ ...comparableChartData, datasets: comparableChartData.datasets.map(d => ({ ...d, backgroundColor: COLORS })) }}
      />
      <h2>Visualising data distribution</h2>
      <ScatterChart
        data={distributedChartData}
      />
      <BubbleChart
        data={distributedChartData}
      />
    </div>
  );
}