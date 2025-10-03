import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Mockup = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detecta tamanho da tela
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // checa na primeira renderização
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className=" overflow-x-hidden w-full min-h-screen  text-white flex flex-col justify-center items-center py-16">
      {/* Título */}
      <div className="flex flex-col justify-center items-center text-center ">
        <h1 className="text-2xl md:text-5xl font-bold font-zalando text-[#0D6DFF] mb-6">
          UM APP TOTALMENTE PRA VOCÊ
        </h1>
      </div>

      {/* Texto */}
      <div className="flex justify-center items-center mx-6 md:mx-20 lg:mx-40">
        <p className=" text-xs mx-10 text-center font-zalando font-normal text-gray-700  lg:text-lg lg:text-justify">
          Que tal monitorar o uso da água da chuva direto do seu celular?
          Com o Acqualife, cada gota vale economia, consciência e um futuro mais verde.
        </p>
      </div>

      {/* Mockups */}
      <div className="flex  justify-center items-center pt-12">
        {isMobile ? (
          <>
     {/* MOBILE */}
            <motion.img
              src="/img/home/Mockeup-user.png"
              alt="Mockup Left"
              className="w-44"
              initial={{ opacity: 0, x: -10, rotate: -20, scale: 0 }}
              whileInView={{ opacity: 1, x: 50, rotate: -5, scale: 1.3 }}
              transition={{ duration: 1, delay: 0.2 }}
            />

            <motion.img //central 
              src="/img/home/Mockeup.png"
              alt="Mockup Central"
              className="w-44 z-10"
              initial={{ opacity: 0, y: 100, scale: 0 }}
              whileInView={{ opacity: 1, y: -10, scale: 1.3 }}
              transition={{ duration: 1, delay: 0.4 }}
            />

            <motion.img
              src="/img/home/Mockeup-sobre.png"
              alt="Mockup Right"
              className="w-40 "
              initial={{ opacity: 0, x: 10, rotate: 1, scele:0 }}
              whileInView={{ opacity: 1, x: -50, rotate: 5,scale: 1.4 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            </>
        ) : (
          // Mockups Desktop
          <>
            <motion.img
              src="/img/home/Mockeup-user.png"
              alt="Mockup Left"
              className="w-72 md:w-48 lg:w-auto -mr-12"
              initial={{ opacity: 0, x: -100, rotate: -20 }}
              whileInView={{ opacity: 1, x: 265, rotate: -5 }}
              transition={{ duration: 1, delay: 0.2 }}
            />

            <motion.img
              src="/img/home/Mockeup.png"
              alt="Mockup Central"
              className="w-72 md:w-48 lg:w-auto -mr-12 z-10"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />

            <motion.img
              src="/img/home/Mockeup-sobre.png"
              alt="Mockup Right"
              className="w-72 md:w-48 lg:w-auto"
              initial={{ opacity: 0, x: 100, rotate: 10 }}
              whileInView={{ opacity: 1, x: -265, rotate: 5 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default Mockup;
