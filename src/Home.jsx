import React, { useState, useEffect } from "react";

export default function Home() {


  return (
    <div className="min-h-screen z-[-1] w-min-screen relative scroll-y">
      <div
        className="fixed top-0 left-0 w-5 h-5 bg-purple-600 rounded-full pointer-events-none"
      ></div>

      <section className="min-h-screen hero-section">
        <div className="hero-content flex flex-col md:flex-row items-center px-10 py-20">
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Want to Get Success
              <span className="block">In your future</span>
            </h1>
            <p className="text-gray-600 mb-6">
              It is a long established fact that a reader will be distracted by
              the readable
            </p>
            <button className="bg-purple-800 ml-5 w-full md:w-1/3 text-white px-10 py-2 rounded-full hover:bg-purple-700">
              Get started
            </button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="undraw_coffee-with-friends_ocg2.svg"
              alt="Illustration"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="min-h-screen w-full flex flex-col" id="features">
        <div className="h-1/2 w-full p-4 flex justify-between bg-purple-100 pt-16 pd-16">
          <div className="ml-40 pt-10">
            <h2 className="font-bold text-6xl">
              DSA Question
              <span className="block ml-12 mb-5">Preparation</span>
            </h2>
            <p className="font-medium text-lg ml-16">
              Master the art of problem-solving, and
              <span className="block">
                coding interviews will be just another challenge you conquer
              </span>
            </p>
          </div>
          <img
            src="undraw_solution-mindset_pit7.svg"
            alt="Illustration"
               className="w-[30%] pr-5 pt-5"
          />
        </div>
        <div className="h-1/2 w-full mt-12 p-4 flex justify-between pt-16 pd-16">
          <img
            src="undraw_coffee-with-friends_ocg2.svg"
            alt="Illustration"
           className="w-[30%] pl-5 pt-5"
          />
          <div className="ml-40 pt-10">
            <h2 className="font-bold text-6xl">
              Solve Puzzle
              <span className="block mr-12 mb-5">Preparation</span>
            </h2>
            <p className="font-medium text-lg mr-16">
              Master the art of problem-solving, and
              <span className="block">
                coding interviews will be just another challenge you conquer
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Third and Fourth Sections */}
      <section className="min-h-screen mx-auto w-full flex flex-col">
        <div className="h-1/2 w-full p-4 flex justify-between bg-purple-100 pd-16">
          <div className="mx-4 md:mx-10 pt-10 flex justify-center items-center flex-col">
            <h2 className="font-bold text-6xl">
              DSA Question
              <span className="block ml-12 mb-5">Preparation</span>
            </h2>
            <p className="font-medium text-lg ml-16">
              Master the art of problem-solving, and
              <span className="block">
                coding interviews will be just another challenge you conquer
              </span>
            </p>
          </div>
          <img
            src="undraw_referral_j2rw.svg"
            alt="Illustration"
            className="w-full md:w-1/3 pr-5 pt-5"
          />
        </div>
        <div className="h-1/2 w-full mt-5 p-4 flex justify-between pt-16 pd-16">
          <div className="mx-4 md:mx-10 pt-10">
            <h2 className="font-bold text-6xl">
              DSA Question
              <span className="block ml-12 mb-5">Preparation</span>
            </h2>
            <p className="font-medium text-lg ml-16">
              Master the art of problem-solving, and
              <span className="block">
                coding interviews will be just another challenge you conquer
              </span>
              <span className="block">
                coding interviews will be just another challenge you conquer
              </span>
            </p>
          </div>
          <img
            src="undraw_solution-mindset_pit7.svg"
            alt="Illustration"
            className="w-[30%] pr-5 pt-5"
          />
        </div>
      </section>
    </div>
  );
}
