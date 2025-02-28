import React, { useState } from "react";
import { FaFilter, FaTrophy } from "react-icons/fa";
import questions from "../Questions/aptitude";

const Aptitude = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleNext = () => {
    setShowExplanation(false);
    setSelectedOption(null);
    setCurrentQuestion((prev) => (prev + 1) % filteredQuestions.length);
  };



  const handleAnswer = (option) => {
    setSelectedOption(option);
    setShowExplanation(true);
  };

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setCurrentQuestion(0);
    setShowExplanation(false);
    setSelectedOption(null);
  };

  const topics = [...new Set(questions.map((q) => q.topic))];

  const filteredQuestions = selectedTopic
    ? questions.filter((q) => q.topic === selectedTopic)
    : [];

  const currentQuestionData = filteredQuestions[currentQuestion] || {};

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-4 shadow-md">
        <h2 className="text-xl font-bold text-blue-600">Topics</h2>
        <ul className="mt-4 space-y-2">
          {topics.map((topic, index) => (
            <li key={index}>
              <button
                className={`block w-full px-4 py-2 text-left border rounded-md ${
                  selectedTopic === topic
                    ? "bg-blue-300"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => handleTopicSelect(topic)}
              >
                {topic}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 ml-6">
        <nav className="bg-white p-4 shadow-md flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Aptitude Practice</h1>
          <div className="flex gap-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2">
              <FaTrophy />
              <a href="/leaderboard">Leaderboard</a>
            </button>
          </div>
        </nav>

        <div className="max-w-3xl mx-auto bg-white p-6 mt-6 shadow-md rounded-lg">
          {selectedTopic ? (
            <>
              <h2 className="text-xl font-bold">
                Question {currentQuestion + 1}
              </h2>
              <p className="mt-4 text-gray-700">
                {currentQuestionData.question}
              </p>

              <div className="mt-4 space-y-2">
                {currentQuestionData.options.map((option, index) => (
                  <button
                    key={index}
                    className={`block w-full px-4 py-2 text-left border rounded-md ${
                      selectedOption === option
                        ? option === currentQuestionData.answer
                          ? "bg-green-300"
                          : "bg-red-300"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {showExplanation && (
                <div className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-500">
                  <strong>Explanation:</strong>{" "}
                  {currentQuestionData.explanation}
                </div>
              )}

              <div className="mt-6 flex justify-between">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded-full"
                  onClick={handleNext}
                >
                  Next Question
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-700">
              Please select a topic to start practicing.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Aptitude;
