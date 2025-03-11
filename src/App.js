import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import BrowserRouter and Routes
import Navbar from "./Screen/Navbar"; // Import Navbar component
import Login from "./Screen/Login";
// import { ToastContainer } from 'react-toastify';
import Home from "./Home";
import DSAquestion from "./Screen/DSAquestion";
import Preparation from "./Screen/Preparation";
import CodeSheet from "./Screen/CodeSheet";
import Aptitude from "./Screen/Aptitude";
import Leaderboard from "./Screen/Leaderboard";
import ContestPage from "./Screen/ContestPage";
import CheckDailyContest from "./Screen/CheckDailyContest";
import Puzzle from "./Screen/Puzzle";
import VirtualInterview from "./Screen/VirtualInterview";
import DSAlearningPage from "./Screen/DSAlearningPage";
import LearningPage from "./Screen/LearningPage";
import JavaLearning from "./Screen/LearningSection/JavaLearning";
import CLearning from "./Screen/LearningSection/CLearning";
import CloudComputing from "./Screen/LearningSection/CloudComputing";
import PythonLearning from "./Screen/LearningSection/PythonLearning";
import AptitudeLearning from "./Screen/LearningSection/AptitudeLearning";
import CyberSecurity from "./Screen/LearningSection/CyberSecurity";
import BlockChainLearning from "./Screen/LearningSection/BlockChainLearning";
import Communication from "./Screen/LearningSection/Communication";
import AIML from "./Screen/LearningSection/AIML";
import DataAnalytics from "./Screen/LearningSection/DataAnalytics";
import InterviewPreparation from "./Screen/LearningSection/InterviewPreparation";
import Hackathons from "./Screen/Hackathons";
import SQLQuestions from "./Screen/SQLQuestions";
import Gamification from "./Screen/Gamification";
import Footer from "./Screen/Footer";
import { UserAuth } from "./auth/UserAuth";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar /> {/* Add Navbar component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/dsa-question" element={<DSAquestion />} />
          <Route path="/preparation" element={<UserAuth><Preparation /></UserAuth>} />
          <Route path="/code-sheet" element={<CodeSheet />} />
          <Route path="/aptitude" element={<Aptitude />} />
          <Route path="/aptitude-learning" element={<AptitudeLearning />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/contest-page" element={<UserAuth><ContestPage /></UserAuth>} />
          <Route path="/contest-check" element={<CheckDailyContest />} />
          <Route path="/puzzle" element={<Puzzle />} />
          <Route path="/virtual-interview" element={<UserAuth><VirtualInterview /></UserAuth>} />
          <Route
            path="/interview-question"
            element={<InterviewPreparation />}
          />
          <Route path="/learning" element={<UserAuth><LearningPage /></UserAuth>} />
          <Route path="/dsa-learning" element={<DSAlearningPage />} />
          <Route path="/java-learning" element={<JavaLearning />} />
          <Route path="/c-learning" element={<CLearning />} />
          <Route
            path="/cloud-computing-learning"
            element={<CloudComputing />}
          />
          <Route path="/blockchain-learning" element={<BlockChainLearning />} />
          <Route path="/communication-learning" element={<Communication />} />
          <Route path="/Aiml-learning" element={<AIML />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/cyber-security-learning" element={<CyberSecurity />} />
          <Route path="/data-analytics-learning" element={<DataAnalytics />} />
          <Route path="/sql-question" element={<SQLQuestions />} />
          <Route path="/gamification" element={<UserAuth><Gamification /></UserAuth>} />
          <Route path="/python-learning" element={<PythonLearning />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
