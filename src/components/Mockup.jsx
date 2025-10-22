import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Mockup = () => {

  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  // Detecta tamanho da tela
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // checa na primeira renderização
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="overflow-x-hidden w-full  text-white flex-col justify-center items-center py-16">
      {/* Título */}
      <motion.div
        className="flex flex-col justify-center items-center text-center px-1"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        style={{ filter: "blur(6px)" }}
        animate={{ filter: "blur(0px)" }}
      >
        <h1 className="text-xl md:text-5xl font-bold font-zalando text-[#0D6DFF] mb-6">
          UM APP TOTALMENTE PRA VOCÊ
        </h1>
      </motion.div>

      {/* Texto */}
      <motion.div
        className="flex justify-center items-center md:mx-20 lg:mx-40"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        style={{ filter: "blur(6px)" }}
        animate={{ filter: "blur(0px)" }}
      >
        <p
          className="text-xs mx-10 text-center font-zalando font-normal text-gray-700 lg:text-lg lg:text-justify"
        >
          Desenvolvemos um app onde você consiguira monitorar a sua economia.
        </p>
      </motion.div>

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
              whileInView={{ opacity: 1, x: 65, rotate: -5, scale: 1.3 }}
              transition={{ duration: 1, delay: 0.2 }}
            />

            <motion.img //central 
              src="/img/home/Mockeup.png"
              alt="Mockup Central"
              className="w-44 z-10"
              initial={{ opacity: 0, y: 100, scale: 0 }}
              whileInView={{ opacity: 1, y: -10, scale: 1.3 }}
              transition={{ duration: 1, delay: 0.1 }}
            />

            <motion.img
              src="/img/home/Mockeup-sobre.png"
              alt="Mockup Right"
              className="w-40 "
              initial={{ opacity: 0, x: 10, rotate: 1, scele: 0 }}
              whileInView={{ opacity: 1, x: -57, rotate: 5, scale: 1.4 }}
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
              transition={{ duration: 1, delay: 0.1 }}
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
      {/* Botão */}

      <motion.div
        className="flex col-span-1 flex-col justify-center items-center pt-12 px-6 md:px-20"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        style={{ filter: "blur(6px)" }}
        animate={{ filter: "blur(0px)" }}>
        
        <button
          className="items-center mb-2 mt-2 w-72 bg-azul-style text-white font-zalando px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-500 transition-colors"
          onClick={() => navigate('/Download#DownloadAppBtn')}
        >
          Saber mais
        </button>
      </motion.div>
    </section>
  );
};

export default Mockup;