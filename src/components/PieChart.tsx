import React from "react";
import { Pie } from "react-chartjs-2";
import { ChartData } from 'chart.js';

const options = {
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
        title: {
            display: true,
            text: 'Pie Chart',
        },
    },
};

export function PieChart({ data }: { data: ChartData<'pie'> }): JSX.Element {
    return (
        <div className="chart-container">
            <Pie
                data={data}
                options={options}
            />
        </div>
    );
}