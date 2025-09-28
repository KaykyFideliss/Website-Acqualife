import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Second from "./components/Second";

function App() {
  return (
    <>
      <Navbar />
     
      <Routes>
        {/* Rota principal */}
        <Route path="/" element={<Hero />} />

        {/* Outra página */}
        <Route path="/second" element={<Second />} />

        {/* Se quiser pode adicionar mais rotas */}
        {/* <Route path="/contato" element={<Contato />} /> */}
      </Routes>
       <Second />
    </>
  );
}

export default App;
