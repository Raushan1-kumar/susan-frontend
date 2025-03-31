import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "../config/axios";

import { useNavigate } from "react-router-dom";




const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleLoginSubmit = async(e) => {
    e.preventDefault();
    console.log(loginData);
    await axios
      .post("/users/login", {
        email: loginData.email,
        password: loginData.password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem('token',res.data.token);
        localStorage.setItem('user',JSON.stringify(res.data.user));
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    console.log(signUpData);
    await axios
      .post("/users/register", {
        firstName: signUpData.firstName,
        lastName: signUpData.lastName,
        email: signUpData.email,
        password: signUpData.password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex items-center mx-5 justify-center min-h-screen rounded-xl bg-gray-100">
      {/* Auth Container */}
      <div className="relative w-[800px] h-[500px] bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Animated Sliding Panel */}
        <motion.div
          initial={false}
          animate={{ x: isSignUp ? "100%" : "0%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute w-1/2 h-full bg-purple-700 text-white flex flex-col items-center justify-center text-center px-8"
        >
          <h2 className="text-3xl font-bold mb-4">
            {isSignUp ? "Welcome Back!" : "Hello, Friend!"}
          </h2>
          <p className="mb-6">
            {isSignUp
              ? "Already have an account? Login here."
              : "Don't have an account? Sign up now!"}
          </p>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="px-6 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-700 transition"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </motion.div>

        {/* Login & Signup Forms */}
        <div className="flex w-full h-full">
          {/* Login Form */}
          <motion.div
            initial={false}
            animate={{ x: isSignUp ? "-100%" : "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-1/2 flex flex-col items-center justify-center p-8"
          >
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleLoginSubmit} className="w-full">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={loginData.email}
                onChange={handleLoginChange}
                className="w-full px-4 py-2 border rounded-lg mb-4"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginChange}
                className="w-full px-4 py-2 border rounded-lg mb-4"
                required
              />
              <button
                type="submit"
                className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition"
              >
                Login
              </button>
            </form>
          </motion.div>

          {/* Signup Form */}
          <motion.div
            initial={false}
            animate={{ x: isSignUp ? "-100%" : "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-1/2 flex flex-col items-center justify-center p-8"
          >
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form onSubmit={handleSignUpSubmit} className="w-full">
              <div className="flex gap-2 flex-row ">
                {" "}
                <input
                  type="text"
                  name="firstName"
                  placeholder="firstName"
                  value={signUpData.firstName}
                  onChange={handleSignUpChange}
                  className="w-[48%] px-4 py-2 border rounded-lg mb-4"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="lastName"
                  value={signUpData.lastName}
                  onChange={handleSignUpChange}
                  className="w-[48%] px-4 py-2 border rounded-lg mb-4"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={signUpData.email}
                onChange={handleSignUpChange}
                className="w-full px-4 py-2 border rounded-lg mb-4"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={signUpData.password}
                onChange={handleSignUpChange}
                className="w-full px-4 py-2 border rounded-lg mb-4"
                required
              />
              <button
                type="submit"
                className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition"
              >
                Sign Up
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;


