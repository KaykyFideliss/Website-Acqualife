import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Second from "./components/Second";
import WhatIsTheApp from "./components/WhatIsTheApp";
import WhoTouse from "./components/WhoTouse";
import Download from "./page/Download";
import Home from "./page/Home";
import Sobre from "./page/Sobre";
import Sistema from "./page/Sistema";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        
        {/* principal */}
        <Route path="/" element={<Home />} />
        {/* Rota de download */}
        <Route path="/download" element={<Download />} />

        {/* Rota sobre */}
        <Route path="/sobre" element={<Sobre />} />

        {/* Rota sistema */}
        <Route path="/sistema" element={<Sistema />} />
      </Routes>
    </>
  );
}

export default App;
