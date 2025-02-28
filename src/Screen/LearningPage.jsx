import React from "react";
import { topics } from "../Questions/learningTopics";
import { useNavigate } from "react-router-dom";

const LearningPage = () => {
  const navigate = useNavigate();

  const moveToSection = (id) => {
    navigate("/java-learning");
  };

  return (
    <div className="bg-gray-100 min-h-screen  p-8 relative">
      {/* Header */}
      <div className="z-[-2]">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-8">
          Explore & Learn
        </h1>

        {/* Topic Boxes */}
        <div className="grid grid-cols-2 z-0 md:grid-cols-3 h-40 lg:grid-cols-4 gap-6 mb-12">
          {topics.map((topic) => (
            <div
              key={topic.id}
              onClick={() => navigate(topic.route)}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:bg-purple-500 hover:text-white"
            >
              <h2 className="text-xl font-semibold">{topic.title}</h2>
              <p className="text-gray-600 mt-2">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPage;
