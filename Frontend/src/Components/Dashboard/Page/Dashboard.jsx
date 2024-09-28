

import React from "react";
import ProfileCard from "../ProfileCard";
import StatsCard from "../StatsCard";
import ProblemSolved from "../ProblemSolved";
import ContestRankings from "../ContestRankings";
import TopicAnalysis from "../TopicAnalysis";
import SubmissionsGraph from "../SubmissionsGraph";
// import ProfileCard from "./components/ProfileCard";
// import StatsCard from "./components/StatsCard";
// import ProblemSolved from "./components/ProblemSolved";
// import SubmissionsGraph from "./components/SubmissionsGraph";
// import ContestRankings from "./components/ContestRankings";
// import TopicAnalysis from "./components/TopicAnalysis";

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
        <ContestRankings />
      </div>
      <div>
        <TopicAnalysis />
      </div>
    </div>
  );
};

export default Dashboard;
