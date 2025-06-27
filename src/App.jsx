
import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import TermsPolicy from "./components/TermsPolicy.jsx";
import Main from "./components/Main.jsx";

  

export default function App() {
 
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/terms" element={<TermsPolicy />} />
      </Routes>
    </Router>
    </>
  );
}
