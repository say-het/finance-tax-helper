/** @format */

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Analysis() {
  const data1 = {
    labels: [
      "Income Tax",
      "Property Tax",
      "Sales Tax",
      "Capital Gains Tax",
      "Other",
    ],
    datasets: [
      {
        label: "Tax Contribution Breakdown",
        data: [30, 20, 25, 15, 10], // Replace with your tax data
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const data2 = {
    labels: [
      "Salary Income",
      "Business Income",
      "Investment Income",
      "Other Income",
    ],
    datasets: [
      {
        label: "Income Source Breakdown",
        data: [50, 30, 15, 5], // Replace with your ITR data
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        borderWidth: 1,
      },
    ],
  };

  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  return (
    <div className="bg-white text-black   rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500">
      <h2 className="text-xl font-bold mb-4">Analysis</h2>
      <div className="flex justify-around">
        <div className="text-center">
          {/* <p className="text-gray-600">Tax Analysis</p> */}
          <h2 className="text-2xl font-semibold mb-4">Tax Analysis</h2>
          <Pie data={data1} options={options1} />
        </div>
        <div className="text-center">
          {/* <p className="text-gray-600">Tax Analysis</p> */}
          <h2 className="text-2xl font-semibold mb-4">ITR Profile Analysis</h2>
          <Pie data={data2} options={options2} />
        </div>
      </div>
    </div>
  );
}

export default Analysis;
