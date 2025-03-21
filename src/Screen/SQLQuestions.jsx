import React, { useState } from "react";
import sqlQuestions from "../Questions/sqlQuestions"; // Importing SQL questions
import { motion } from "framer-motion";

const SQLQuestions = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [currentPage, setCurrentPage] = useState(0); // State for current page
  const questionsPerPage = 10; // Number of questions per page
  const totalPages = Math.ceil(sqlQuestions.length / questionsPerPage); // Total number of pages

  const toggleAnswer = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-6">
        SQL Interview Questions
      </h1>

      <div className="max-w-3xl w-full bg-white p-6 rounded-lg shadow-lg">
        {sqlQuestions
          .slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage)
          .map((q, index) => (
            <div key={q.id} className="mb-4 border-b pb-4">
              <button
                onClick={() => toggleAnswer(q.id)}
                className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-800"
              >
                <span>
                  <span className="mr-4">{currentPage * questionsPerPage + index + 1}.</span>
                  {q.question}
                </span>
                <span className="text-xl">{openQuestion === q.id ? "🔼" : "🔽"}</span>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openQuestion === q.id ? "auto" : 0,
                  opacity: openQuestion === q.id ? 1 : 0,
                }}
                className="overflow-hidden mt-2 text-gray-700"
              >
                {q.answer}
              </motion.div>
            </div>
          ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="p-2 bg-gray-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === 0} // Disable if on the first page
        >
          Previous
        </button>

        <span className="text-lg font-semibold">
          Page {currentPage + 1} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="p-2 bg-purple-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage + 1 >= totalPages} // Disable if no more questions
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SQLQuestions;
