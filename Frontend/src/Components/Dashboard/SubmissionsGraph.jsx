import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale, 
  LinearScale, 
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function SubmissionsGraph() {
     const data = {
       labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
       datasets: [
         {
           label: "Submissions",
           data: [2, 6, 7, 15, 20, 25],
           fill: false,
           backgroundColor: "rgba(75,192,192,0.2)",
           borderColor: "rgba(75,192,192,1)",
         },
       ],
     };

     const options = {
       scales: {
         y: {
           beginAtZero: true,
         },
       },
     };
  return (
    <>
      <div className="bg-[#FFFFFF] rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Submissions in Past 6 Months</h2>
        <Line data={data} options={options} />
      </div>
    </>
  );
}

export default SubmissionsGraph
