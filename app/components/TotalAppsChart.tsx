"use client";
import { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';

export default function TotalAppsChart() {

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData();
    });

    return (
        <Chart type="line" data={chartData} />
    )
}