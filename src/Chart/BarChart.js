import React from 'react'
import { Bar , Doughnut} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
export default function BarChart({chartData}) {
  return (
    <>
      <Bar data={chartData} />
   </>
  )
}
