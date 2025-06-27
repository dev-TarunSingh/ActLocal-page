
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TermsPolicy from "./components/TermsPolicy.jsx";
import Main from "./components/Main.jsx";

  

export default function ActLocalPromo() {
 
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/terms-policy" element={<TermsPolicy />} />
      </Routes>
    </Router>
    </>
  );
}
