'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { data } from 'autoprefixer';

ChartJS.register(ArcElement, Tooltip, Legend);



export default function DoughnutChart() {

    const data = {
        labels: ["bank one", "bank two","bank three"],
        datasets: [{
            label:"Banks",
            data: [1250,2345,5772],
            backgroundColor: ["#0179FE","#4893FF","#85B7FF","#BED9FF","#E9F2FF"],
        }]
    }
  return (
    <div>
        <Doughnut width={120} height={120} data={data} options={{
           maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
                legend: {
                    display: false
                }
            }  
        }}/>
    </div>
  )
}
