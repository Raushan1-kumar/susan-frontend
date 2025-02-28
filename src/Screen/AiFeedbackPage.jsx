import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Dark theme like VS Code
import "prismjs/components/prism-javascript"; // Support for JavaScript syntax

const AIFeedbackPage = (props) => {
  const [aiResponse, setAIResponse] = useState(null);

  useEffect(() => {
      Prism.highlightAll(); // Highlight syntax after content loads
  }, []);

  const handleClose = () => {
    props.setAiFeedback(false);
  };
  return (
    <div className="flex right-2 top-10  w-[40%] h-[80vh] bg-white flex-col absolute shadow-lg rounded-lg p-6 mx-auto mt-10 overflow-y-auto">
      <h2 className="text-2xl font-bold text-purple-600 mb-4">
        AI Code Feedback{" "}
        <span className="cursor-pointer ml-80" onClick={handleClose}>
          &times;
        </span>
      </h2>

      {props.aiResponse ? (
        <div className="animate-fadeIn">
          {/* AI Feedback */}
          <p className="text-gray-700 mb-4">{props.aiResponse.text}</p>

          {/* Optimized Code */}
          <pre className="bg-black p-4 rounded-md overflow-x-auto">
            <code className="language-javascript">
              {props.aiResponse.code}
            </code>
          </pre>
        </div>
      ) : (
        <p className="text-gray-500 animate-pulse">Analyzing your code...</p>
      )}
    </div>
  );
};

export default AIFeedbackPage;
