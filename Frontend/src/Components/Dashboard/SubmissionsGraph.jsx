/** @format */

import React from "react";
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
        label: "Total Submissions",
        data: [2, 6, 7, 15, 20, 25],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Tax Deductions Claimed",
        data: [1, 2, 5, 8, 12, 15],
        fill: false,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Refunds Processed",
        data: [0, 0, 2, 5, 10, 12],
        fill: false,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Count",
        },
      },
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Tax Filings and Deductions Over the Last 6 Months",
      },
    },
  };

  return (
    <div className="bg-[#FFFFFF] text-black   rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Tax Filings and Deductions</h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default SubmissionsGraph;
