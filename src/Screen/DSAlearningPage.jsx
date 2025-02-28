import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // VS Code dark theme
import "prismjs/components/prism-javascript"; // Highlighting for JavaScript
import { FaBook } from "react-icons/fa";
import dsaTopics from "../Questions/dsaLearning";

const exampleCode = {
  Arrays: `// C++ Example: Finding the max element in an array
#include <iostream>
using namespace std;
int main() {
    int arr[] = {3, 5, 1, 8, 2};
    int maxVal = arr[0];
    for (int i = 1; i < 5; i++) {
        if (arr[i] > maxVal)
            maxVal = arr[i];
    }
    cout << "Max Value: " << maxVal;
    return 0;
}`,
  "Linked List": `// C++ Example: Linked List Node Structure
#include <iostream>
using namespace std;
class Node {
public:
    int data;
    Node* next;
    Node(int val) { data = val; next = NULL; }
};
int main() {
    Node* head = new Node(10);
    head->next = new Node(20);
    cout << head->next->data;
    return 0;
}`,
};

const DSAlearningPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(dsaTopics[0]);

  useEffect(() => {
    Prism.highlightAll(); // Apply syntax highlighting
  }, [selectedTopic]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/3 bg-white shadow-lg p-6">
        <h2 className="text-xl font-bold text-purple-600 flex items-center gap-2">
          <FaBook /> DSA Topics
        </h2>
        <ul className="mt-4">
          {dsaTopics.map((topic, index) => (
            <li
              key={index}
              className={`cursor-pointer py-2 px-4 rounded-lg hover:bg-purple-100 transition 
                ${
                  selectedTopic.title === topic.title
                    ? "bg-purple-500 text-white"
                    : "text-gray-700"
                }`}
              onClick={() => setSelectedTopic(topic)}
            >
              {topic.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-8 bg-white shadow-lg">
        <h2 className="text-2xl font-bold text-purple-700">
          {selectedTopic.title}
        </h2>
        <p className="text-gray-700 mt-2">{selectedTopic.content}</p>

        {/* Example Code */}
        {exampleCode[selectedTopic.title] && (
          <div className="mt-6">
            <h3 className="font-semibold">Example Code:</h3>
            <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
              <code className="language-cpp">
                {exampleCode[selectedTopic.title]}
              </code>
            </pre>
          </div>
        )}
      </main>
    </div>
  );
};

export default DSAlearningPage;
