import React from "react";
import { Bar } from "react-chartjs-2";
import { ChartData } from 'chart.js';

const options = {
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Bar Chart',
        },
    },
};

export function BarChart({ data }: { data: ChartData<'bar'> }): JSX.Element {
    return (
        <div className="chart-container">
            <Bar
                data={data}
                options={options}
            />
        </div>
    );
}