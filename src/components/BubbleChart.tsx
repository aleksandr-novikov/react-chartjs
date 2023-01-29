import React from "react";
import { Bubble } from "react-chartjs-2";
import { ChartData } from 'chart.js';

const options = {
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
        title: {
            display: true,
            text: 'Bubble Chart',
        }
    },
    scales: {
        y: {
            max: 120000,
        }
    },
    events: []
};

export function BubbleChart({ data }: { data: ChartData<'bubble'> }): JSX.Element {
    return (
        <div className="chart-container">
            <Bubble
                data={data}
                options={options}
            />
        </div>
    );
}