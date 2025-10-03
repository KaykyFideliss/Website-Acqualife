import React from "react";
import Hero from "../components/Hero";
import Second from "../components/Second";
import WhatIsTheApp from "../components/WhatIsTheApp";
import WhoTouse from "../components/WhoTouse";

import Mockup from "../components/Mockup";


const Home = () => {
  return (
    <div>
      <Hero />
        <WhatIsTheApp />
      <Second />
    
   <WhoTouse />

      <Mockup />
    </div>
  );
};

export default Home;
