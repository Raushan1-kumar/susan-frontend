import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Sample data for leaderboard
const leaderboardData = [
  { id: 1, name: "Alice", xp: 3200, avatar: "🔥", rank: 1 },
  { id: 2, name: "Bob", xp: 2800, avatar: "⚡", rank: 2 },
  { id: 3, name: "Charlie", xp: 2500, avatar: "🚀", rank: 3 },
  { id: 4, name: "David", xp: 2300, avatar: "🎯", rank: 4 },
  { id: 5, name: "Eve", xp: 2200, avatar: "🌟", rank: 5 },
];

// Sample badges
const badges = [
  { name: "100-Day Streak", icon: "🔥" },
  { name: "Algorithm Master", icon: "🧠" },
  { name: "Bug Fixer", icon: "🔧" },
  { name: "Fast Coder", icon: "⚡" },
  
];

// Timer logic for Daily Coding Challenge
const getRemainingTime = () => {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(23, 59, 59, 999);
  return midnight - now;
};

const Gamification = () => {
  const [timeLeft, setTimeLeft] = useState(getRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getRemainingTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Convert time into HH:MM:SS format
  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-6">Gamification & Leaderboard</h1>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* XP & Badges */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md flex flex-wrap justify-center items-center overflow-hidden flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Achievements</h2>
          <div className="flex flex-wrap gap-4">

            {badges.map((badge, index) => (
              <div key={index} className="p-3 bg-purple-200 w-32 h-32  flex flex-col justify-center rounded-lg text-center">
                <span className="text-4xl">{badge.icon}</span>
                <p className="text-sm font-semibold">{badge.name}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Leaderboard */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Leaderboard</h2>
          <ul>
            {leaderboardData.map((user, index) => (
              <li
                key={user.id}
                className={`flex items-center justify-between p-3 rounded-lg mb-2 ${
                  index === 0 ? "bg-yellow-300" : "bg-gray-200"
                }`}
              >
                <span className="text-lg font-semibold">{user.avatar} {user.name}</span>
                <span className="font-bold text-gray-700">{user.xp} XP</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Daily Coding Challenge Countdown */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Daily Coding Challenge</h2>
          <p className="text-3xl font-bold text-red-600">{formatTime(timeLeft)}</p>
          <p className="text-gray-600 mt-2">Time left for today's challenge</p>
          <button className="mt-4 px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition">
            <a href="contest-page">Attemp Now</a>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Gamification;
