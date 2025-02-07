//Om Sai Ram
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HistoryPage from "./pages/HistoryPage"; // Create this component
import FestivalsPage from "./pages/FestivalsPage"; // Create this component
import CuisinePage from "./pages/CuisinePage"; // Create this component
import FeedbackPage from "./pages/FeedbackPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/festivals" element={<FestivalsPage />} />
        <Route path="/cuisine" element={<CuisinePage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </Router>
  );
};

export default App;
