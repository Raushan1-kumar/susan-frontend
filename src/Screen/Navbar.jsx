import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import axios from "../config/axios";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false); // Added state for menu visibility
  const [isLogin, setIsLogin] = useState(false);
  const scrollToAbout = (event) => {
    event.preventDefault();
    const featuresSection = document.getElementById("about");
    featuresSection.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setIsLogin(!!localStorage.getItem("token"));
  }, [isLogin]);

  const logout = () => {

    axios
      .get("/users/logout",{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      })
      .catch((err) => {
        console.log(err);
      });
    setIsLogin(false);
  };

  return (
    <nav className="flex justify-between items-center z-6 px-4 md:px-10 py-4 bg-primary  text-textPrimary shadow-md sticky top-0">
      <div className="text-xl md:text-2xl font-bold">SUSAN AI</div>
      <ul className="hidden md:flex gap-4 md:gap-6">
        <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
          <Link
            to="/"
            onClick={(e) => {
              scrollToAbout(e);
            }}
          >
            About
          </Link>
        </li>
        <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
          <Link to="/preparation">Preparation</Link>
        </li>
        <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
          <Link to="/virtual-interview">Virtual Interview</Link>
        </li>
        <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
          <Link to="/contest-page">Contest</Link>
        </li>
        <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
          <Link to="/learning">Learning</Link>
        </li>
        <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
          <Link to="/hackathons">Hackathons</Link>
        </li>
        <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
          <Link to="/gamification">Achievement</Link>
        </li>
      </ul>
      <button className="hidden md:block border border-white px-4 py-1 rounded-full hover:bg-white hover:text-purple-700">
        <Link to={isLogin ? "" : "/login"}>
          {isLogin ? (
            <button
              onClick={() => {
                logout();
              }}
            >
              log-out
            </button>
          ) : (
            <p>login</p>
          )}
        </Link>
      </button>
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {isMenuOpen && (
          <ul className="flex flex-col gap-4 mt-2">
            <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
              <Link
                to="/"
                onClick={(e) => {
                  scrollToAbout(e);
                }}
              >
                About
              </Link>
            </li>
            <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
              <Link to="/preparation">Preparation</Link>
            </li>
            <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
              <Link to="/virtual-interview">Virtual Interview</Link>
            </li>
            <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
              <Link to="/contest-page">Contest</Link>
            </li>
            <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
              <Link to="/learning">Learning</Link>
            </li>
            <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
              <Link to="/hackathons">Hackathons</Link>
            </li>
            <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
              <Link to="/gamification">Achievement</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
