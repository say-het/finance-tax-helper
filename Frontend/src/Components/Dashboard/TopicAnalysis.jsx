
import React from "react";

function TopicAnalysis() {
  const deadline = "31st December 2024";
  const reminders = [
    "Ensure all deductions are claimed correctly.",
    "Verify bank details for tax refunds.",
    "Cross-check income from all sources.",
  ];
  return (
    <div className="p-4 mb-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-lg shadow-md">
      <div className="flex items-center">
        <svg
          className="w-6 h-6 mr-2 text-yellow-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
          />
        </svg>
        <h3 className="font-semibold text-lg">Important Deadline Reminder</h3>
      </div>
      <p className="mt-2 text-sm">
        <strong>ITR Submission Deadline:</strong> {deadline}
      </p>
      {reminders.length > 0 && (
        <div className="mt-2">
          <strong>Other Important Reminders:</strong>
          <ul className="list-disc list-inside mt-1 text-sm">
            {reminders.map((reminder, index) => (
              <li key={index}>{reminder}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TopicAnalysis;