import React from "react";
import { Line } from "react-chartjs-2";
import { ChartData } from 'chart.js';

const options = {
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Line Chart',
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

export function LineChart({ data }: { data: ChartData<'line'> }): JSX.Element {
  return (
    <div className="chart-container">
      <Line
        data={data}
        options={options}
      />
    </div>
  );
}