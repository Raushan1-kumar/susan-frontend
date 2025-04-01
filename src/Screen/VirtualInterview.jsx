import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaMicrophone, FaRobot } from "react-icons/fa";

const VirtualInterview = () => {
  const [question, setQuestion] = useState("Tell me about yourself.");
  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [answer, setAnswer] = useState("");
  const [nextIndex, setNextIndex] = useState(0);

  const questions = [
    "Tell me about yourself.",
    "What is your biggest strength?",
    "Where do you see yourself in 5 years?",
    "Explain a challenging project you worked on.",
    "Why should we hire you?",
  ];

  // Function to speak AI question
  const speakQuestion = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 1;
    setSpeaking(true);
    speech.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(speech);
  };

  // Send question and user's answer to backend using Axios
  const sendToBackend = async (question, answer) => {
    try {
      const response = await axios.post("/question/interview-question", {
        question,
        answer,
      });
      console.log("Backend Response:", response.data);
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  // Start Listening for User Answer
  const startListening = () => {
    setListening(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
      const userAnswer = event.results[0][0].transcript;
      setAnswer(userAnswer);
      setListening(false);
      sendToBackend(question, userAnswer);
    };
    recognition.onerror = () => setListening(false);
    recognition.start();
  };

  // Ask Next Question
  const nextQuestion = () => {
    const newIndex = nextIndex + 1;
    if (newIndex < questions.length) {
      setNextIndex(newIndex);
      setQuestion(questions[newIndex]);
      speakQuestion(questions[newIndex]);
      setAnswer("");
    }
  };

  useEffect(() => {
    speakQuestion(question);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[50%] bg-white p-6 rounded-lg shadow-lg">
        {/* AI Question */}
        <div className="flex items-start mb-4">
          <FaRobot className="text-purple-500 text-5xl mr-4" />
          <div className="bg-purple-100 text-purple-700 p-4 rounded-lg">
            <h2 className="text-xl font-bold">AI Interviewer</h2>
            <p>{question}</p>
          </div>
        </div>

        {/* User Answer Display */}
        {answer && (
          <div className="flex items-start justify-end mb-4">
            <div className="bg-blue-100 text-blue-700 p-4 rounded-lg">
              <p>{answer}</p>
            </div>
          </div>
        )}

        {/* Animated Microphone */}
        <div className="flex justify-center mb-4">
          {listening ? (
            <FaMicrophone className="text-red-500 text-4xl animate-pulse" />
          ) : (
            <FaMicrophone
              className={`text-4xl ${
                speaking ? "text-blue-500 animate-bounce" : "text-gray-500"
              }`}
            />
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={startListening}
            className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
          >
            Start Answer
          </button>
          <button
            onClick={nextQuestion}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default VirtualInterview;
