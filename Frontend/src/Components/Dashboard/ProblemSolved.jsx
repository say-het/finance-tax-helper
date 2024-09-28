import React from 'react'

function ProblemSolved() {
  return (
    <>
      <div className="bg-[#FFFFFF] rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Problems Solved</h2>
        <div className="flex justify-around">
          <div className="text-center">
            <p>Easy</p>
            <p className="text-2xl">17</p>
          </div>
          <div className="text-center">
            <p>Medium</p>
            <p className="text-2xl">29</p>
          </div>
          <div className="text-center">
            <p>Hard</p>
            <p className="text-2xl">8</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProblemSolved
