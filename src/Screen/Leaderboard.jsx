import React, { useState, useEffect } from "react";
import { FaMedal, FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Leaderboard = () => {
  const [users, setUsers] = useState([
    { rank: 1, name: "Alice", score: 980 },
    { rank: 2, name: "Bob", score: 920 },
    { rank: 3, name: "Charlie", score: 890 },
    { rank: 4, name: "David", score: 850 },
    { rank: 5, name: "Emma", score: 800 },
    { rank: 6, name: "Frank", score: 770 },
    { rank: 7, name: "Grace", score: 750 },
    { rank: 8, name: "Hank", score: 730 },
    { rank: 9, name: "Ivy", score: 710 },
    { rank: 10, name: "Jack", score: 700 },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const displayedUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">
        Leaderboard
      </h1>
      <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-3">Rank</th>
              <th className="p-3">Name</th>
              <th className="p-3">Score</th>
            </tr>
          </thead>
          <tbody>
            {displayedUsers.map((user, index) => (
              <tr
                key={user.rank}
                className={`border-b ${index % 2 === 0 ? "bg-gray-50" : ""}`}
              >
                <td className="p-3 font-bold flex items-center gap-2">
                  {user.rank}
                  {user.rank <= 3 && (
                    <FaMedal
                      className={
                        user.rank === 1
                          ? "text-yellow-500"
                          : user.rank === 2
                          ? "text-gray-400"
                          : "text-orange-500"
                      }
                    />
                  )}
                </td>
                <td className="p-3">{user.name}</td>
                <td className="p-3 font-semibold text-purple-600">
                  {user.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-between mt-4">
          <button
            className={`p-2 rounded bg-purple-500 text-white flex items-center gap-1 ${
              currentPage === 1 && "opacity-50 cursor-not-allowed"
            }`}
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            <FaChevronLeft /> Prev
          </button>
          <span className="text-gray-700 font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={`p-2 rounded bg-purple-500 text-white flex items-center gap-1 ${
              currentPage === totalPages && "opacity-50 cursor-not-allowed"
            }`}
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
