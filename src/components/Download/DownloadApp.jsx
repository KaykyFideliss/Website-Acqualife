import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillAndroid } from "react-icons/ai";

const DownloadApp = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="DownloadNow"
      className="relative w-full min-h-screen text-white flex flex-col justify-center items-center bg-white overflow-hidden pb-40 md:pb-56"
    >
      {/* Título */}
      <motion.div
        className="text-center px-1"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        style={{ filter: "blur(6px)" }}
        animate={{ filter: "blur(0px)" }}
      >
        <h1 className="text-xl md:text-5xl font-bold font-zalando text-azul-style mb-6">
          FAÇA DOWNLOAD AGORA
        </h1>
      </motion.div>

      {/* Conteúdo principal (ficará acima dos mockups) */}
      <div className="flex flex-col items-center justify-center text-center z-20">
        <div className="text-azul-style text-9xl mb-2">
          <AiFillAndroid />
        </div>
        <h2 className="text-azul-style font-zalando font-medium mb-2">Android</h2>

        <a
          // href=""
          // download
          className="mt-4 w-72 bg-gray-800 text-white  cursor-not-allowed font-zalando px-5 py-3 rounded-xl text-sm font-semibold hover:bg-gray-500 transition-colors text-center z-30"
        >
          EM BREVE
          {/* ACQUALIFE 1.0 (.apk) */}
        </a>
      </div>

      {/* Mockups: absolute, invadem levemente o footer */}
      <div className="flex justify-center items-end w-full absolute bottom-[-4rem] md:bottom-[-6rem] pb-0 z-10 pointer-events-none">
        {isMobile ? (
          <>
             {/* Esquerda */}
  <motion.img
    src="/img/download/half-phone-about.png"
    alt="Mockup Esquerda"
    className="w-auto sm:w-48 absolute left-[12%] bottom-0 opacity-90"
    initial={{ opacity: 0, x: 100, y: 30 }}
    whileInView={{ opacity: 1, x: 50, y: 40 }}
    transition={{ duration: 1 }}
  />

  {/* Centro */}
  <motion.img
    src="/img/download/half-phone.png"
    alt="Mockup Centro"
    className="w-auto sm:w-52 z-20 drop-shadow-2xl absolute bottom-0"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1,   y: 0 }}
    transition={{ duration: 1 }}
  />

  {/* Direita */}
  <motion.img
    src="/img/download/half-phone-login.png"
    alt="Mockup Direita"
    className="w-auto sm:w-48 absolute right-[12%] bottom-0 opacity-90"
    initial={{ opacity: 0, x: -100, y: 30 }}
    whileInView={{ opacity: 1, x: -50, y: 40 }}
    transition={{ duration: 1 }}
  />

          </>
        ) : (
          <>
            <motion.img
              src="/img/download/half-phone-about.png"
              alt="Mockup Left"
              className="w-64 md:w-auto  opacity-90"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 270 }}
              transition={{ duration: 1 }}
            />
            <motion.img
              src="/img/download/half-phone.png"
              alt="Mockup Center"
              className="w-64 md:w-auto z-10 drop-shadow-2xl"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: -10 }}
              transition={{ duration: 1 }}
            />
            <motion.img
              src="/img/download/half-phone-login.png"
              alt="Mockup Right"
              className="w-64 md:w-auto -ml-10 opacity-90"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: -245 }}
              transition={{ duration: 1 }}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default DownloadApp;
