import React, { use, useLayoutEffect, useState } from "react";
import puzzleQuestions from "../Questions/puzzlequestions";
import axios from "../config/axios";
import questions from "./../Questions/aptitude";

const Puzzle = () => {
  const [selectedPuzzle, setSelectedPuzzle] = useState(puzzleQuestions[0]); // Default puzzle
  const [userLogic, setUserLogic] = useState(""); // User's logic input
  const [aiResponse, setAiResponse] = useState("");
  const [question, setQuestion] = useState("");
  const [material, setMaterial] = useState("");

  const checkSubmit = async (questions) => {
    console.log(questions);
    console.log(selectedPuzzle.question);
    setQuestion(questions);
    setMaterial(userLogic);

    await axios
      .post("/question/puzzle", { puzzle: userLogic })
      .then((res) => {
        console.log(res.data);
        setAiResponse(res.data.text);
        console.log(aiResponse);
        setUserLogic(`${userLogic} "Ai Response :" ${aiResponse}`);
      })
      .catch((err) => {
        console.log(err);
      });
    setUserLogic(`${userLogic}\n "AI Response is :" ${aiResponse}`);
  };

  return (
    <div className="flex flex-col h-screen md:flex-row">
      <div className="w-full md:w-1/3 bg-white text-black p-6 overflow-y-auto shadow-md">
        <h2 className="text-3xl font-bold text-red-700 mb-4">
          Puzzle Questions
        </h2>

        <ul>
          {puzzleQuestions.map((puzzle) => (
            <li
              key={puzzle.id}
              className={`p-2 cursor-pointer flex flex-row justify-between transition-all rounded-lg ${
                selectedPuzzle.id === puzzle.id
                  ? "bg-gray-200 text-black font-semibold"
                  : "hover:bg-purple-200 "
              }`}
              onClick={() => setSelectedPuzzle(puzzle)}
            >
              Puzzle {puzzle.id}
              <button
                className="ml-4 px-2 py-1 bg-red-400 text-white rounded-lg hover:bg-green-600 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`Puzzle ${puzzle.id} marked as solved!`);
                }}
              >
                Mark as Solved
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full md:w-2/3 p-8 bg-gray-100 overflow-y-auto">
        <h2 className="text-2xl font-bold text-black mb-4">
          {selectedPuzzle.question}
        </h2>

        {/* Hint */}
        <p className="text-lg text-green-500 mb-2 italic">
          Hint: {selectedPuzzle.solutionHint}
        </p>

        {/* Textarea for writing logic */}
        <textarea
          className="w-full h-60 p-4 border rounded-lg text-black"
          placeholder="Write your logic here..."
          value={userLogic}
          onChange={(e) => setUserLogic(e.target.value)}
        ></textarea>

        {/* Button */}
        <button
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => checkSubmit(selectedPuzzle.question)}
        >
          Submit Logic
        </button>
      </div>

      <div className="absolute bg-gray-200 h-40 w-40 hidden top-40 left-80"></div>
    </div>
  );
};

export default Puzzle;
