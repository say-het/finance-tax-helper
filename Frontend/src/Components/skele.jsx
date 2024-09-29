/** @format */

import React from "react";
import { Link } from "react-router-dom";

const DashboardSkeleton = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-12">
        {/* Skeleton for the ProfileCard and Generate Report Button */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4 space-y-4">
            {/* ProfileCard Skeleton */}
            <div className="h-40 bg-gray-200 rounded-lg animate-pulse"></div>

            {/* Generate OCR Button Skeleton */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="h-10 bg-gray-300 rounded-lg animate-pulse"></div>
            </div>
          </div>

          {/* Skeleton for StatsCard */}
          <div className="w-full md:w-3/4">
            <div className="h-40 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>

        {/* Middle Section: Analysis, Topic Analysis, and News */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section Skeleton (Analysis & SubmissionsGraph) */}
          <div className="w-full md:w-2/3 flex flex-col gap-8">
            <div className="h-40 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="h-40 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>

          {/* Right Section Skeleton (TopicAnalysis & News) */}
          <div className="w-full md:w-1/3 flex flex-col gap-8">
            <div className="h-40 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="h-40 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;