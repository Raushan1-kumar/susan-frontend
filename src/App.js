import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import InterviewBranch from "./Screen/InterviewBranch";
import sqlQuestions from "./Questions/sqlQuestions";
import SQLQuestions from "./Screen/SQLQuestions";

function App() {
  const myRouter = createBrowserRouter([
    { path: "", Component: Home },
    { path: "login", Component: Login },
    { path: "signup", Component: DSAquestion },
    { path: "dsa-question", Component: DSAquestion },
    { path: "preparation", Component: Preparation },
    { path: "code-sheet", Component: CodeSheet },
    { path: "aptitude", Component: Aptitude },
    { path: "leaderboard", Component: Leaderboard },
    { path: "contest-page", Component: ContestPage },
    { path: "contest-check", Component: CheckDailyContest },
    { path: "puzzle", Component: Puzzle },
    { path: "virtual-interview", Component: VirtualInterview },
    { path: "interview-question", Component: InterviewBranch },
    { path: "learning", Component: LearningPage },
    { path: "dsa-learning", Component: DSAlearningPage },
    { path: "java-learning", Component: JavaLearning },
    { path: "c-learning", Component: CLearning },
    { path: "cloud-computing-learning", Component: CloudComputing },
    { path: "python-learning", Component: PythonLearning },
    { path: "aptitude-learning", Component: AptitudeLearning },
    { path: "cyber-security-learning", Component: CyberSecurity },
    { path: "blockchain-learning", Component: BlockChainLearning },
    { path: "communication-learning", Component: Communication },
    { path: "Aiml-learning", Component: AIML },
    { path: "data-analytics", Component: DataAnalytics },
    { path: "hackathons", Component: Hackathons },
    {path:"sql-question",Component:SQLQuestions},
  ]);
  return (
    <div>
      <RouterProvider router={myRouter} />
      {/* <ToastContainer/> */}
    </div>
  );
}

export default App;
