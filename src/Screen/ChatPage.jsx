import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import axios from "../config/axios";

const ChatPage = (props) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() !== "") {
      const newMessages = [...messages, { text: input, type: "sent" }];
      setMessages(newMessages);
      setInput("");

      try {
        console.log('reached');
        const response = await axios.post("/question/give-hint", {
          question: input,
        });
        setMessages((prev) => [
          ...prev,
          { text: response.data.text, type: "received" },
        ]);
      } catch (error) {
        console.error("Error sending message:", error);
        setMessages((prev) => [
          ...prev,
          { text: "Failed to send message", type: "received" },
        ]);
      }
    }
  };

  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    props.setAiHint(false);
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed bottom-5 right-5 w-[37%] h-[60vh] bg-white shadow-lg rounded-lg flex flex-col overflow-hidden">
        <div className="bg-purple-600 text-white py-3 px-4 font-bold text-lg flex justify-between items-center">
          AI Hints Chat
          <span className="cursor-pointer" onClick={handleClose}>
            &times;
          </span>
        </div>
        <div className="flex-1 p-4 overflow-y-auto space-y-2 bg-gray-100">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: msg.type === "sent" ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-3 rounded-lg max-w-[80%] ${
                msg.type === "sent"
                  ? "bg-purple-500 text-white ml-auto"
                  : "bg-gray-300 text-black"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
          <div ref={chatEndRef}></div>
        </div>
        <div className="flex items-center border-t p-3 bg-white">
          <input
            type="text"
            className="flex-1 p-2 border rounded-lg outline-none"
            placeholder="Ask a question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            className="ml-2 bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 transition"
            onClick={handleSend}
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    )
  );
};

export default ChatPage;
