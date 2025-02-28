import React from "react";

const ContestPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <div className="bg-green-500 text-white text-center py-4 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">Daily DSA Challenge</h1>
      </div>

      {/* Today's Question Section */}
      <div className="bg-white p-6 mt-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold text-purple-700">Today's Question</h2>
        <p className="mt-4 text-gray-700">
          Given an array of integers, return indices of the two numbers such
          that they add up to a specific target.
        </p>
        <pre className="bg-gray-900 text-green-300 p-4 mt-4 rounded-md text-sm overflow-x-auto">
          {`Input: nums = [2,7,11,15], target = 9
Output: [0,1]`}
        </pre>
        <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-800">
          <a href="/contest-check">Attempt</a>
        </button>
      </div>

      {/* Previous Day Top 10 Students */}
      <div className="bg-white p-6 mt-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold text-purple-700">
          Previous Day's Top 10
        </h2>
        <table className="w-full mt-4">
          <thead>
            <tr className="bg-purple-200">
              <th className="p-2 text-left">Rank</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Score</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">Student {index + 1}</td>
                <td className="p-2">{Math.floor(Math.random() * 100) + 1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContestPage;
