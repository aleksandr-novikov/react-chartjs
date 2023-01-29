import React from "react";
import { Scatter } from "react-chartjs-2";
import { ChartData } from 'chart.js';

const options = {
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
        title: {
            display: true,
            text: 'Scatter Chart',
        },
    },
    scales: {
        y: {
            max: 120000,
        }
    }
};

export function ScatterChart({ data }: { data: ChartData<'scatter'> }): JSX.Element {
    return (
        <div className="chart-container">
            <Scatter
                data={data}
                options={options}
            />
        </div>
    );
}