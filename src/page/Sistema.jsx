import React, { useEffect, useRef } from 'react';
import CarroselSistema from '../components/Sistema/CarroselSistema';
import HeroSistema from '../components/HeroSistema';
import Funcionamento from '../components/Sistema/Funcionamento';
import Components from '../components/Sistema/Components';
import Motivation from '../components/Sistema/Motivation';
import Footer from '../components/Footer';

const Sistema = () => {
  const motivationRef = useRef(null);
  const tanqueRef = useRef(null);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash === '#motivation' && motivationRef.current) {
      motivationRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#Tanque' && tanqueRef.current) {
      tanqueRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div>
      <HeroSistema />
      <CarroselSistema />
      
      <div ref={tanqueRef}>
        <Funcionamento />
      </div>
      
      <Components />
      
      <div ref={motivationRef}>
        <Motivation />
      </div>
      
      <Footer />
    </div>
  );
};

export default Sistema;
