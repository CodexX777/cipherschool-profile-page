import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CreatorAccess from "./pages/CreatorAccess";
import Dashboard from "./pages/Dashboard";
import Discord from "./pages/Discord";
import Following from "./pages/Following";
import SendFeedback from "./pages/SendFeedback";
import Trending from "./pages/Trending";
import UserTour from "./pages/UserTour";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/creator" element={<CreatorAccess />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/discord" element={<Discord />} />
          <Route path="/following" element={<Following />} />
          <Route path="/sendfeedback" element={<SendFeedback />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/usertour" element={<UserTour />} />
          <Route path="*" element={<>Not Found</>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
