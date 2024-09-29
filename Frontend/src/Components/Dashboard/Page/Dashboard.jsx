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
  const generateReport = async () => {
    console.log("Generating report...");
    try {
      // const response = await fetch("http://127.0.0.1:5000/getDetailsFromMongo", {
      //   method: "POST",
      // });


//


const response = await fetch("http://127.0.0.1:5000/getDetailsFromMongo", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ email : localStorage.getItem("userEmail") })
});


//


      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Tax_Deduction_Report.pdf');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error generating report:", error);
      alert("Failed to generate report. Please try again later.");
    }
  }
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
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
          <ProfileCard generalInfo={userData.generalInfo} />
 
            {/* Generate OCR Button */}
            <div className="bg-[#FFFFFF] rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500 mt-4">
              <button onClick={generateReport} className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg">
                Generate AI
              </button>
            </div>
          </div>
          <div className="w-full md:w-3/4">
          <StatsCard income={userData.income} expenses={userData.expenses} />
           </div>
        </div>

        {/* Middle Section: Analysis, Topic Analysis, and News */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3 flex flex-col gap-8">
            <Analysis />
            <SubmissionsGraph />
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-8">
            <TopicAnalysis />
            <News />
          </div>
        </div>
      </div>
    </div>  );
};

export default Dashboard;
