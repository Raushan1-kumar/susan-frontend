function Footer() {
  return (
    <section className="min-h-1/2 bg-gray-900 text-white" id="about">
      <footer className="bg-[#0c1d4a] text-white py-10 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-semibold mb-3">For Businesses</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Susan Assessments</li>
              <li>Virtual Interview</li>
              <li>Hiring</li>
              <li>Hackathons</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Features</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Accurate Assessments</li>
              <li>DSA Practice</li>
              <li>Improved Interview Experience</li>
              <li>Detailed Analytics</li>
              <li>Enterprise-Ready Platform</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Knowledge</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>DSA Blog</li>
              <li>E-Books</li>
              <li>Aptitude & Reasoning</li>
              <li>Guides</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Support</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm opacity-80 text-center md:text-left">
            support@susan.com
            <br />
            +91-7779952130
          </div>
          {/* Uncomment and add social media icons here */}
          {/* <div className="flex space-x-4 mt-4 md:mt-0">
            <FaFacebookF className="cursor-pointer hover:text-blue-400" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-400" />
            <FaYoutube className="cursor-pointer hover:text-red-400" />
          </div> */}
        </div>
      </footer>
    </section>
  );
}

export default Footer;
