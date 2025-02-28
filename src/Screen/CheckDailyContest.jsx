import React from "react";
import { FaRegLightbulb, FaTags, FaBuilding } from "react-icons/fa";

const CheckDailyContest = (props) => {
  const [code, setCode] = React.useState();

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Main Content */}
      <div className="flex flex-cols h-full gap-6 mt-6">
        {/* Left Section - Problem Statement */}
        <div className="bg-white w-[50%] p-6 shadow rounded-lg">
          <h2 className="text-2xl font-bold">1. Two Sum</h2>
          <div className="flex gap-2 mt-2 text-gray-600">
            <span className="bg-green-200 text-green-700 px-2 py-1 rounded">
              Easy
            </span>
            <FaTags className="mt-1" /> <span>Topics</span>
            <FaBuilding className="mt-1" /> <span>Companies</span>
            <FaRegLightbulb className="mt-1" /> <span>Hint</span>
          </div>
          <p className="mt-4 text-gray-700">
            Given an array of integers{" "}
            <code className="bg-gray-200 px-1">nums</code> and an integer{" "}
            <code className="bg-gray-200 px-1">target</code>, return indices of
            the two numbers such that they add up to{" "}
            <code className="bg-gray-200 px-1">target</code>.
          </p>

          {/* Examples */}
          <div className="mt-4 ">
            <h3 className="font-semibold">Example 1:</h3>
            <pre className="bg-gray-100 p-3 rounded">
              <code>
                Input: nums = [2,7,11,15], target = 9{"\n"}
                Output: [0,1]
              </code>
            </pre>
            <h3 className="font-semibold mt-2">Example 2:</h3>
            <pre className="bg-gray-100 p-3 rounded">
              <code>
                Input: nums = [3,2,4], target = 6{"\n"}
                Output: [1,2]
              </code>
            </pre>
          </div>

          {/* Constraints */}
          <div className="mt-4 text-gray-600">
            <h3 className="font-bold">Constraints:</h3>
            <ul className="list-disc pl-6">
              <li>2 ≤ nums.length ≤ 10⁴</li>
              <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Code Editor */}
        <div className="bg-white w-[50%] p-6  pb-5 shadow rounded-lg">
          <h2 className="text-xl font-bold mb-2">Write Your Solution</h2>
          <textarea
            className="w-full h-[79%] p-3 border rounded-lg font-mono"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "14px",
              backgroundColor: "#1e1e1e",
              color: "#d4d4d4",
            }}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button className="mt-4 mb-5 bg-purple-600 text-white px-4 py-2 rounded-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckDailyContest;
