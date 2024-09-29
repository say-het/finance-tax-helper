/** @format */
import React, { useState, useEffect } from "react";
import ProfileCard from "../ProfileCard";
import StatsCard from "../StatsCard";
import TopicAnalysis from "../TopicAnalysis";
import SubmissionsGraph from "../SubmissionsGraph";
import News from "../News";
import Analysis from "../Analysis";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let email = localStorage.getItem("userEmail");
        const response = await fetch(
          "http://localhost:7000/api/fetch/getIndividualdetail",
          {
            method: "POST",
            body: JSON.stringify({ email: email }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setUserData(data[0]); // Assuming the fetched data structure is an array
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      {/* Dashboard Container */}
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-12">
        {/* Top Section: Profile and Stats */}
        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="flex-grow md:w-1/3">
            <ProfileCard generalInfo={userData.generalInfo} />
          </div>
          <div className="flex-grow md:w-2/3">
            <StatsCard income={userData.income} expenses={userData.expenses} />
          </div>
        </div>

        {/* Middle Section: Analysis and Topic Analysis */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-grow md:w-2/3 flex flex-col space-y-8">
            {/* Pass the fetched tax and income data to Analysis */}
            <Analysis taxData={userData.taxData} incomeData={userData.incomeData} />
            <SubmissionsGraph />
          </div>

          <div className="flex-grow md:w-1/3">
            <TopicAnalysis />
          </div>
        </div>

        {/* Bottom Section: News */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-grow md:w-1/3">
            <News />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
