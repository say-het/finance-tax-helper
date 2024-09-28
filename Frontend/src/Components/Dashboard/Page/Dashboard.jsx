/** @format */

import React from "react";
import ProfileCard from "../ProfileCard";
import StatsCard from "../StatsCard";
import ProblemSolved from "../ProblemSolved";
import TopicAnalysis from "../TopicAnalysis";
import SubmissionsGraph from "../SubmissionsGraph"; 
import News from "../News";
import Analysis from "../Analysis";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-black p-6 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProfileCard />
        <StatsCard />
        <ProblemSolved />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SubmissionsGraph />
        <Analysis />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopicAnalysis />
        <News /> {/* Add the News Component here */}
      </div>
    </div>
  );
};

export default Dashboard;
