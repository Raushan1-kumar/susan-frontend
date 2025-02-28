import React, { useContext, useEffect, useRef, useState } from "react";

import { FaRegLightbulb, FaTags, FaBuilding } from "react-icons/fa";
import ChatPage from "./ChatPage";
import AIFeedbackPage from "./AiFeedbackPage";
import axios from "../config/axios";
import allProblems from "../Questions/DsaQuestionInDetail";

const sampleCode = '';
const CodeSheet = () => {
  const [code, setCode] = useState(sampleCode);
  const [aiHint, setAiHint] = useState(false);
  const aiHintRef = useRef(null);
  const [aiFeedback, setAiFeedback] = useState(false);
  const [loader, setLoader] = useState(false);
  const [aiResponse, setAiResponse] = useState({});
  const title = localStorage.getItem("title");

  const problem = allProblems.find((problem) => problem.title === title);
useEffect(() => {
  console.log("Updated aiResponse:", aiResponse);
}, [aiResponse]);


  const callAi = async () => {

    try {
      setLoader(true);
      console.log("Sending code:", code);
      const response = await axios.post("/question/check-code", { code });
      console.log("Received AI response:", response.data);
      setLoader(false);
      setAiResponse(response.data);
      setAiFeedback(true);
    } catch (error) {
      console.error("Error submitting code to AI:", error);
    }
  };
  
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {aiHint && <ChatPage ref={aiHintRef} setAiHint={setAiHint} />}

      {aiFeedback && <AIFeedbackPage setAiFeedback={setAiFeedback} aiResponse={aiResponse} />}

      {/* Main Content */} 
      <div className="flex flex-cols h-full gap-6 mt-6">
        {/* Left Section - Problem Statement */}
        <div className="bg-white pb-20 w-[50%] p-6 shadow rounded-lg">
          <h2 className="text-2xl font-bold">{problem.title}</h2>
          <div className="flex gap-2 mt-2 text-gray-600">
            {/* <span className="bg-green-200 text-green-700 px-2 py-1 rounded">
              Easy
            </span> */}
            <FaTags className="mt-1" /> <span>Topics</span>
            <FaBuilding className="mt-1" /> <span>Companies</span>
            <FaRegLightbulb className="mt-1" />{" "}
            <span
              onClick={() => {
                setAiHint(true);
              }}
              className="cursor-pointer"
            >
              Ask AI for Hint
            </span>
          </div>
          <p className="mt-4 font-bold text-gray-700">{problem.description}</p>

          <div className="mt-4 ">
            <h3 className="font-semibold">Example 1:</h3>
            <pre className="bg-gray-100 p-3 rounded">
              <code>
                Input: {JSON.stringify(problem.examples[0].input)}
                <br />
                Output: {JSON.stringify(problem.examples[0].output)}
              </code>
            </pre>
            <h3 className="font-semibold mt-2">Example 2:</h3>
            <pre className="bg-gray-100 p-3 rounded">
              {problem.examples[1] && (
                <code>
                  Input: {JSON.stringify(problem.examples[1].input)}
                  <br />
                  Output: {JSON.stringify(problem.examples[1].output)}
                </code>
              )}
            </pre>
          </div>

          {/* Constraints */}
          <div className="mt-4 text-gray-600">
            <h3 className="font-bold">Constraints:</h3>
            <ul className="list-disc pl-6">
              {problem.constraints.map((constraint, index) => {
                return <li key={index}>{constraint}</li>;
              })}
            </ul>
          </div>
        </div>

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
          <button
            className="mt-4 mb-5 bg-purple-600 text-white px-4 py-2 rounded-full"
            onClick={() => {
              callAi();
            }}
          >
        {loader ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeSheet;
