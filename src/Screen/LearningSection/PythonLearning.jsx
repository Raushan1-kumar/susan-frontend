import React, { useState } from "react";
// Ensure correct import
import { pythonTopics } from "./../../Questions/pythonTopics";

const PythonLearning = () => {
  const [selectedTopic, setSelectedTopic] = useState(pythonTopics[0]); // Default topic selected

  return (
    <div className="flex h-screen">
      {/* Left Sidebar: Topic List */}
      <div className="w-1/3 bg-white text-black p-6 overflow-y-auto border-r">
        <h2 className="text-3xl font-bold text-red-700 mb-4">
          python Programming Learning
        </h2>

        {/* Categories */}
        {["Basic", "Intermediate", "Advanced"].map((category) => (
          <div key={category} className="mb-4">
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">
              {category}
            </h3>
            <ul>
              {pythonTopics
                .filter((topic) => topic.category === category)
                .map((topic) => (
                  <li
                    key={topic.id}
                    className={`p-2 cursor-pointer transition-all rounded-lg ${
                      selectedTopic.id === topic.id
                        ? "bg-gray-500 text-white font-semibold"
                        : "hover:bg-gray-600 hover:text-white"
                    }`}
                    onClick={() => setSelectedTopic(topic)}
                  >
                    {topic.title}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Right Side: Topic Content */}
      <div className="w-2/3 p-8 bg-gray-100 overflow-y-auto">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">
          {selectedTopic.title}
        </h2>

        {/* Display detailed content */}
        {selectedTopic.content.map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-2xl font-semibold text-blue-700">
              {section.heading}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {section.text}
            </p>

            {/* Subtopics */}
            {section.subtopics &&
              section.subtopics.map((sub, subIndex) => (
                <div key={subIndex} className="ml-4 mt-2">
                  <h4 className="text-xl font-semibold text-green-700">
                    {sub.subheading}
                  </h4>
                  <p className="text-gray-600">{sub.text}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PythonLearning;
