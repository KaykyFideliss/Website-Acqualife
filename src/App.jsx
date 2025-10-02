import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Second from "./components/Second";
import WhatIsTheApp from "./components/WhatIsTheApp";
import WhoTouse from "./components/WhoTouse";
import Download from "./page/Download";
import Home from "./page/Home";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        
        {/* principal */}
        <Route path="/" element={<Home />} />
        {/* Rota de download */}
        <Route path="/Page-Download" element={<Download />} />
      </Routes>
    </>
  );
}

export default App;
