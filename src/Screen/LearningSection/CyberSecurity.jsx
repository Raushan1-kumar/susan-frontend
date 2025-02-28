import React, { useState } from "react";
import cyberSecurityTopics from "./../../Questions/cybersecurity";

const CyberSecurity = () => {
  const [selectedTopic, setSelectedTopic] = useState(cyberSecurityTopics[0]); // Default topic selected

  return (
    <div className="flex h-screen">
      {/* Left Sidebar: Topic List */}
      <div className="w-1/3 bg-white text-black p-6 overflow-y-auto">
        <h2 className="text-3xl font-bold text-red-700 mb-4">
          Python Learning
        </h2>

        {/* Categories */}
        {["Basic", "Intermediate", "Interview"].map((category) => (
          <div key={category} className="mb-4">
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">
              {category}
            </h3>
            <ul>
              {cyberSecurityTopics
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
        <p className="text-lg text-gray-700 leading-relaxed">
          {selectedTopic.content}
        </p>
      </div>
    </div>
  );
};

export default CyberSecurity;
