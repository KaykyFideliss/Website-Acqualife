import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CardComponents = () => {
  const images = [
    { src: "/img/Sistema/vasilha.png", title: "Reservatório 700ML" },
    { src: "/img/Sistema/cano20mm.png", title: "Cano de PVC marrom" },
    { src: "/BOMBA.png", title: "BOMBA D'ÁGUA" },
    { src: "/BOMBA.png", title: "BOMBA D'ÁGUA" },

     { src: "/img/Sistema/vasilha.png", title: "Reservatório 700ML" },
    { src: "/img/Sistema/Uno.png", title: "ESP32" },
    { src: "/BOMBA.png", title: "BOMBA D'ÁGUA" },
    { src: "/BOMBA.png", title: "BOMBA D'ÁGUA" }
   
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      3000 // troca a cada 3 segundos
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" h-screen w-full flex flex-col justify-center items-center bg-white">
      {/* Título */}
      <motion.div
        className="flex flex-col justify-center items-center mb-10"
        initial={{ opacity: 0, filter: "blur(6px)", y: 15 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className="text-xl md:text-5xl font-bold font-zalando text-[#0D6DFF] text-center">
          VEJA AS PEÇAS
        </h1>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {images.map((item, i) => (
          <motion.div
            key={i}
            className={`rounded-2xl w-72 h-96 bg-white flex flex-col  justify-center items-center text-azul-style shadow-lg shadow-azul-style/40 transition-all duration-700 ${
              i === index ? "scale-105 ring-4 ring-azul-style" : "opacity-70"
            }`}
            animate={{
              opacity: i === index ? 1 : 0.5,
              scale: i === index ? 1.05 : 1,
            }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-60 h-60 object-contain rounded-xl"
            />
            <p className="mt-4 text-base px-2 font-semibold font-zalando">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CardComponents;
