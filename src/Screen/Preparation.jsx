import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const Preparation = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const navigate = useNavigate();
      useEffect(() => {
          const handleMouseMove = (event) => {
              setMousePosition({ x: event.clientX, y: event.clientY });
          };
  
          window.addEventListener('mousemove', handleMouseMove);
  
          return () => {
              window.removeEventListener('mousemove', handleMouseMove);
          };
      }, []);
  return (
    <div className="bg-gray-100 min-h-screen">
       <div
                className="fixed top-0 left-0 w-5 h-5 bg-purple-500 rounded-full pointer-events-none"
                style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
            ></div>
      {/* Hero Section */}
      <div className="flex gap-4 justify-evenly p-6">
        <a href="/aptitude">
          {" "}
          <div className="bg-blue-800 text-white p-6 h-40 text-center font-bold text-2xl rounded-lg flex-1">
            Top Aptitude question
          </div>
        </a>
        <a href="/dsa-question">
          {" "}
          <div className="bg-green-800 text-white p-6 h-40 text-center font-bold text-2xl rounded-lg flex-1">
            {" "}
            Susan's Top DSA question
          </div>
        </a>
        <a href="/puzzle">
          <div className="bg-yellow-800 text-white p-6 h-40 text-center font-bold text-2xl rounded-lg flex-1">
            Top Puzzle Questions
          </div>
        </a>
       <a href='/interview-question'> <div className="bg-purple-800 text-white p-6 h-40 text-center font-bold text-2xl rounded-lg flex-1">
          Top Interview Questions
        </div>
        </a>
      </div>

      {/* Study Plan Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-purple-900">Study Plan</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow hover:bg-yellow-200">
            Top Interview 150
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:bg-yellow-200">Susan's Top 70 DSA Questions</div>
          <div className="bg-white p-4 rounded-lg shadow hover:bg-yellow-200" onClick={()=>{navigate('/sql-question')}}>SQL 50</div>
        </div>
      </div>

      {/* Problems Table */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-purple-900">Problems</h2>
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-purple-300 text-purple-900">
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Difficulty</th>
              <th className="p-4 text-left">Acceptance</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t cursor-pointer">
              <td className="p-4">✔</td>
              <td className="p-4">
                <a href="/code-sheet">Two Sum</a>
              </td>
              <td className="p-4 text-purple-500">Easy</td>
              <td className="p-4">55.0%</td>
            </tr>
            <tr className="border-t">
              <td className="p-4">✔</td>
              <td className="p-4">Add Two Numbers</td>
              <td className="p-4 text-purple-500">Medium</td>
              <td className="p-4">45.3%</td>
            </tr>
            <tr className="border-t">
              <td className="p-4">✔</td>
              <td className="p-4">Add Two Numbers</td>
              <td className="p-4 text-purple-500">Medium</td>
              <td className="p-4">45.3%</td>
            </tr>
            <tr className="border-t">
              <td className="p-4">✔</td>
              <td className="p-4">Add Two Numbers</td>
              <td className="p-4 text-purple-500">Medium</td>
              <td className="p-4">45.3%</td>
            </tr>
            <tr className="border-t">
              <td className="p-4">✔</td>
              <td className="p-4">Add Two Numbers</td>
              <td className="p-4 text-purple-500">Medium</td>
              <td className="p-4">45.3%</td>
            </tr>
            <tr className="border-t">
              <td className="p-4">✔</td>
              <td className="p-4">Add Two Numbers</td>
              <td className="p-4 text-purple-500">Medium</td>
              <td className="p-4">45.3%</td>
            </tr>
            <tr className="border-t">
              <td className="p-4">✔</td>
              <td className="p-4">Add Two Numbers</td>
              <td className="p-4 text-purple-500">Medium</td>
              <td className="p-4">45.3%</td>
            </tr>
            <tr className="border-t">
              <td className="p-4">✔</td>
              <td className="p-4">Add Two Numbers</td>
              <td className="p-4 text-purple-500">Medium</td>
              <td className="p-4">45.3%</td>
            </tr>
            <tr className="border-t">
              <td className="p-4">✔</td>
              <td className="p-4">Add Two Numbers</td>
              <td className="p-4 text-purple-500">Medium</td>
              <td className="p-4">45.3%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Preparation;
