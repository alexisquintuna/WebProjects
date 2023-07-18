import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SciencePage from "./pages/SciencePage";

function App() {
  return (
    <div className="relative">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/SciencePage" element={<SciencePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
