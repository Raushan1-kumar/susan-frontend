import React, { useState } from "react";
import sqlQuestions from "../Questions/sqlQuestions";

const SQLQuestions = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(sqlQuestions[0]); // Default first question

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-white p-6 overflow-y-auto shadow-lg">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">
          SQL Interview Questions
        </h2>

        {/* Categories */}
        {["Basics", "Commands", "Keys & Constraints", "Filtering & Conditions", "Joins & Set Operations", "Transactions", "Performance Optimization", "Data Modification"].map((category) => (
          <div key={category} className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{category}</h3>
            <ul>
              {sqlQuestions
                .filter((question) => question.topic === category)
                .map((question) => (
                  <li
                    key={question.id}
                    className={`p-2 cursor-pointer transition-all rounded-lg ${
                      selectedQuestion.id === question.id
                        ? "bg-gray-500 text-white font-semibold"
                        : "hover:bg-gray-600 hover:text-white"
                    }`}
                    onClick={() => setSelectedQuestion(question)}
                  >
                    {question.question}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Right Side: Selected Question Content */}
      <div className="w-2/3 p-8 bg-gray-200 overflow-y-auto">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">
          {selectedQuestion.question}
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          {selectedQuestion.answer}
        </p>
      </div>
    </div>
  );
};

export default SQLQuestions;
