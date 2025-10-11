import React from "react";
import Hero from "../components/Hero";
import Second from "../components/Second";
import WhatIsTheApp from "../components/WhatIsTheApp";
import WhoTouse from "../components/WhoTouse";
import Footer from "../components/Footer";
import Mockup from "../components/Mockup";


const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero  />
      <Second />
      <WhatIsTheApp />
      <WhoTouse />
      <Mockup />
      <Footer />

    </div>
  );
};

export default Home;
