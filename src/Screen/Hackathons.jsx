import React, { useState } from "react";
import { hackathons } from "../Questions/hackathons";

const Hackathons = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("Most relevant");

  // Filtered hackathons based on search
  const filteredHackathons = hackathons.filter((hackathon) =>
    hackathon.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex bg-gray-100 min-h-screen p-6">
      {/* Left Sidebar Filters */}
      <div className="w-1/4 bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        <label className="block mb-2 font-medium">Location</label>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="online" className="mr-2" />
          <label htmlFor="online">Online</label>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="inperson" className="mr-2" />
          <label htmlFor="inperson">In-person</label>
        </div>

        <label className="block mb-2 font-medium">Status</label>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="upcoming" className="mr-2" />
          <label htmlFor="upcoming">Upcoming</label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="open" className="mr-2" />
          <label htmlFor="open">Open</label>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 ml-6">
        {/* Search & Sorting */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search by hackathon title or keyword"
            className="w-2/3 p-2 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-2 border rounded-md"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option>Most relevant</option>
            <option>Submission date</option>
            <option>Recently added</option>
            <option>Prize amount</option>
          </select>
        </div>

        <div className="space-y-4 h-128 overflow-y-auto">
          {filteredHackathons.slice(0, 3).map((hackathon) => (
            <div
              key={hackathon.id}
              className="bg-white p-4 rounded-lg shadow-lg flex"
            >
              <img
                src={hackathon.image}
                alt={hackathon.title}
                className="w-24 h-24 rounded-lg mr-4"
              />
              <div>
                {/* Featured Tag */}
                {hackathon.featured && (
                  <span className="bg-yellow-500 text-white px-2 py-1 text-xs rounded-full">
                    FEATURED
                  </span>
                )}
                <h3 className="text-xl font-semibold">{hackathon.title}</h3>
                <p className="text-green-600">{hackathon.daysLeft}</p>
                <p className="text-gray-500">{hackathon.location}</p>
                <p className="text-gray-600">
                  <strong>Prize:</strong> {hackathon.prize}
                </p>
                <p className="text-gray-600">
                  <strong>Participants:</strong> {hackathon.participants}
                </p>
                <p className="text-gray-600">
                  <strong>Date:</strong> {hackathon.date}
                </p>
                <p className="text-gray-600">
                  <strong>Organizer:</strong> {hackathon.organizer}
                </p>
                {/* Topics */}
                <div className="mt-2">
                  {hackathon.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="bg-blue-200 text-blue-800 px-2 py-1 text-xs rounded-full mr-2"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* No results found */}
        {filteredHackathons.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No hackathons found.</p>
        )}
      </div>
    </div>
  );
};

export default Hackathons;
