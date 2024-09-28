import React from 'react'

function TopicAnalysis() {
  return (
    <>
      <div className="bg-[#FFFFFF] rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">DSA Topic Analysis</h2>
        <div className="space-y-2">
          {[
            { topic: "Arrays", count: 35 },
            { topic: "Dynamic Programming", count: 12 },
            { topic: "Backtracking", count: 9 },
            { topic: "Matrix", count: 8 },
            { topic: "Math", count: 7 },
            { topic: "String", count: 7 },
            { topic: "Binary Search", count: 6 },
            { topic: "Recursion", count: 6 },
          ].map(({ topic, count }) => (
            <div key={topic} className="flex justify-between">
              <span>{topic}</span>
              <span className="text-xl font-bold">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TopicAnalysis
