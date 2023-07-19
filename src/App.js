import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SciencePage from "./pages/SciencePage";
import SolutionPage from "./pages/SolutionPage"
import FacturePage from "./pages/FacturePage"

function App() {
  return (
    <div className="relative">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/SciencePage" element={<SciencePage />} />
          <Route path="/SolutionPage" element={<SolutionPage />} />
          <Route path="/FacturePage" element={<FacturePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
