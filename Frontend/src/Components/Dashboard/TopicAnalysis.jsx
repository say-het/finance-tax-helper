/** @format */

import React from "react";

function TopicAnalysis() {
  return (
    <div className="bg-[#FFFFFF] rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Tax Topic Analysis</h2>
      <div className="space-y-4">
        {[
          { topic: "Income Tax", count: 50 },
          { topic: "Deductions", count: 30 },
          { topic: "Filing Status", count: 20 },
          { topic: "Tax Refund", count: 15 },
          { topic: "Capital Gains", count: 10 },
          { topic: "Tax Compliance", count: 8 },
          { topic: "Audit Risks", count: 5 },
          { topic: "Tax Credits", count: 5 },
        ].map(({ topic, count }) => (
          <div key={topic} className="flex justify-between items-center">
            <span className="text-lg">{topic}</span>
            <span className="text-xl font-bold">{count}</span>
            <div className="w-2/3 bg-gray-200 rounded-full h-4 ml-4">
              <div
                className="bg-green-500 h-4 rounded-full"
                style={{ width: `${count * 2}%` }} // Adjust the multiplier for better visualization
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicAnalysis;
