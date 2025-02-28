import React from "react";
import { useNavigate } from "react-router-dom";

const branches = [
  { name: "Computer Science", link: "/interview/cse", color: "bg-purple-500" },
  { name: "Electronics Engineering", link: "/interview/ece", color: "bg-blue-500" },
  { name: "Mechanical Engineering", link: "/interview/mech", color: "bg-green-500" },
  { name: "Civil Engineering", link: "/interview/civil", color: "bg-yellow-500" },
  { name: "Electrical Engineering", link: "/interview/ee", color: "bg-red-500" },
  { name: "Data Science & AI", link: "/interview/dsai", color: "bg-indigo-500" },
];

const InterviewBranch = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100  text-white flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-8 text-purple-900 animate-bounce">
        Interview Preparation
      </h1>
      
      <p className="text-lg text-black mb-6 text-center w-3/4">
        Select your branch to access targeted interview questions and preparation material.
      </p>

      {/* Branch Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {branches.map((branch, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out ${branch.color} text-center`}
            onClick={() => alert('coming soon')}
          >
            <h2 className="text-2xl font-semibold">{branch.name}</h2>
          </div>
        ))}
      </div>

      {/* Floating Animation */}
      <div className="absolute bottom-10 text-gray-500 text-sm animate-pulse">
        Stay ahead in your interviews! 🚀
      </div>
    </div>
  );
};

export default InterviewBranch;
