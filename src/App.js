import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

import Home from "./components/home/Home";
import Jobs from "./components/jobs/Jobs";
import SignIn from "./components/sign-in-up/SignIn";
import SignUp from "./components/sign-in-up/SignUp";
// MY WORK

import Rlogin from "./components/recruiter/login/RlogIn";
import PostJob from "./components/recruiter/rjobs/PostJob";
import ViewJobs from "./components/recruiter/rjobs/ViewJobs"
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        {/* MY WORK */}
        <Route path="/rlogin" element={<Rlogin />}/>
        <Route path="/postjob" element={<PostJob />}/>
        <Route path="/viewjob" element={<ViewJobs />}/>
      </Routes>
    </Router>
  );
}

export default App;
