function Navbar() {
  const scrollToAbout = (event) => {
    event.preventDefault();
    const featuresSection = document.getElementById("about");
    featuresSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex justify-between items-center z-6 px-4 md:px-10 py-4 bg-gradient-to-r from-purple-400 to-purple-700 text-white sticky top-0">
      <div className="text-xl md:text-2xl font-bold">SUSAN AI</div>
      <ul className="hidden md:flex gap-4 md:gap-6">
        <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
          <a href="/">Home</a>
        </li>
        <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
          <a
            onClick={(e) => {
              scrollToAbout(e);
            }}
          >
            About
          </a>
        </li>
        <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
          <a href="/preparation">Preparation</a>
        </li>
        <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
          <a href="/virtual-interview">Virtual Interview</a>
        </li>
        <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
          <a href="/contest-page">Contest</a>
        </li>
        <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
          <a href="/learning">Learning</a>
        </li>
        <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
          <a href="/hackathons">Hackathons</a>
        </li>
        <li className="cursor-pointer font-bold text-sm md:text-lg hover:text-gray-200">
          <a href="#" onClick={() => { alert('coming soon') }}>Hiring</a>
        </li>
      </ul>
      <button className="hidden md:block border border-white px-4 py-1 rounded-full hover:bg-white hover:text-purple-700">
        Sign up
      </button>
      <div className="md:hidden">
        <button className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
