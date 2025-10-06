import React from "react";
import { motion } from "framer-motion";
import VideoPlayerComponents from "./Video-player-Components";

const Components = () => {
  const cards = [
    {
      title: "TANQUES",
      text: "",
      image: "/img/Sistema/Peças/Tanque.png",
    },
    {
      title: "ARDUINO UNO",
      text: "O Arduino Uno é o cérebro do sistema Acqualife. Ele controla os sensores e automatiza as etapas de filtragem e monitoramento de pH da água.",
      image: "/img/Sistema/Peças/uno.png",
    },
  ];

  return (
    <section className="w-full min-h-screen text-white px-6 md:px-20 py-16 flex flex-col items-center">
      {/* Título */}
      <motion.div
        className="flex flex-col justify-center items-center pt-5 mb-16"
        initial={{ opacity: 0, filter: "blur(6px)", y: 15 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className="text-xl md:text-5xl font-bold font-zalando text-[#0D6DFF]  text-center">
          COMPONENTES PARA A MONTAGEM DO SISTEMA
        </h1>
             <p className="pt-4 text-legenda font-zalando text-sm md:text-base lg:text-base text-center ">Conheça os componentes essenciais que dão vida ao nosso sistema. Cada peça foi escolhida para garantir eficiência, segurança e desempenho máximo.</p>
      </motion.div>


    

{/* VIDEO */}
 <div className="flex justify-center items-center  px-4 md:px-24 lg:px-24 mt-8">
        <div className="w-full max-w-4xl">
          <VideoPlayerComponents />
        </div>
      </div>
    
    </section>
  );
};

export default Components;
