import React, { useContext, useState } from "react";
import { FaTags, FaBuilding } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // If using React Router
import problems from "./../Questions/AlldsaQuestions";
import { UserContext } from "../context/user.context";

const topics = [
  "Array",
  "HashMap",
  "Linked List",
  "Sliding Window",
  "Binary Search",
  "Two Pointers",
  "Stack",
  "Sorting",
];
const companies = [
  "Google",
  "Amazon",
  "Microsoft",
  "Facebook",
  "Adobe",
  "Netflix",
  "Apple",
];

const DSAquestion = () => {
  const { setTitle } = useContext(UserContext);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const filteredProblems = problems.filter(
    (problem) =>
      (selectedTopic === "" || problem.topics.includes(selectedTopic)) &&
      (selectedCompany === "" || problem.company === selectedCompany)
  );

  const navigateCodeSet = (title) => {
    localStorage.setItem("title", title);
    navigate("/code-sheet");
  };

  const problemsPerPage = 10;
  const startIndex = (currentPage - 1) * problemsPerPage;
  const displayedProblems = filteredProblems.slice(
    startIndex,
    startIndex + problemsPerPage
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Filters */}
      <div className="flex justify-between items-center bg-white p-4 mt-4 shadow rounded-lg">
        {/* Topic Filter */}
        <div className="flex items-center gap-2">
          <FaTags className="text-gray-600" />
          <span className="font-semibold cursor-pointer">Topic:</span>
          <select
            className="border p-2 rounded-md"
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
          >
            <option value="">All</option>
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        {/* Company Filter */}
        <div className="flex items-center gap-2">
          <FaBuilding className="text-gray-600" />
          <span className="font-semibold">Company:</span>
          <select
            className="border p-2 rounded-md"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            <option value="">All</option>
            {companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Problems List */}
      <div className="bg-white mt-6 shadow rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Problems</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">#</th>
              <th className="p-2 text-left">Title</th>
              <th className="p-2 text-left">Difficulty</th>
              <th className="p-2 text-left">Topic</th>
              <th className="p-2 text-left">Company</th>
            </tr>
          </thead>
          <tbody>
            {displayedProblems.map((problem, index) => (
              <tr key={problem.id} className="border-t">
                <td className="p-2">{startIndex + index + 1}</td>
                <td className="p-2 text-purple-600 hover:underline">
                  {/* <Link to={`/problems/${problem.id}`}>{problem.title}</Link> */}
                  <p
                    onClick={() => {
                      navigateCodeSet(problem.title);
                    }}
                    className="cursor-pointer"
                  >
                    {problem.title}
                  </p>
                </td>
                <td
                  className={`p-2 font-bold ${
                    problem.difficulty === "Easy"
                      ? "text-green-600"
                      : problem.difficulty === "Medium"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {problem.difficulty}
                </td>
                <td className="p-2">{problem.topics.join(", ")}</td>
                <td className="p-2">{problem.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between mt-4">
        <button
          className="bg-gray-300 px-4 py-2 rounded-md disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          &lt; Prev
        </button>
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded-md disabled:opacity-50"
          disabled={startIndex + problemsPerPage >= filteredProblems.length}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default DSAquestion;
