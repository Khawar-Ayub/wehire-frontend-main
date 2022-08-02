import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import ApplyJob from "./components/apply-job/ApplyJob";
// import StartTest from "./components/apply-job/StartTest";
import Home from "./components/home/Home";
import Jobs from "./components/jobs/Jobs";
import SignIn from "./components/sign-in-up/SignIn";
import SignUp from "./components/sign-in-up/SignUp";
import Quiz from "./components/quiz/Quiz";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/applyjob" element={<ApplyJob />} />
        <Route path="/quiztest" element={<Quiz />} />


        
      </Routes>
    </Router>
  );
}

export default App;
