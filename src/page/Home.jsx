import React from "react";
import Hero from "../components/Hero";
import Second from "../components/Second";
import WhatIsTheApp from "../components/WhatIsTheApp";
import WhoTouse from "../components/WhoTouse";
import Footer from "../components/Footer";
import Mockup from "../components/Mockup";
import AcessLogin from "../components/AcessLogin"

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero  />
      <Second />
      <WhatIsTheApp />
      <WhoTouse />
      <Mockup />
      <AcessLogin />
      <Footer />

    </div>
  );
};

export default Home;
