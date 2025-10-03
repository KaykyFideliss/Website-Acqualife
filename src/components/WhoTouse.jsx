import React from "react";
import { motion } from "framer-motion";
import { FaFilter } from "react-icons/fa";

const WhoTouse = () => {
  const cards = [
    {
      title: "Capitação de água",
      text: "Sistema inteligente de captação de água que monitora o nível em tempo real, garantindo abastecimento contínuo e evitando desperdícios.",
    },
    {
      title: "Filtragem da água",
      text: "Filtragem automatizada com sensores que detectam impurezas e qualidade da água. Controle completo via aplicativo móvel.",
    },
    {
      title: "Monitoramento Contínuo de pH",
      text: "Sensor avançado que mede continuamente o pH da água, enviando dados ao app. Isso garante que a água esteja sempre dentro dos padrões de potabilidade, sem necessidade de intervenções manuais.",
    },
    {
      title: "Distribuição Eficiente",
      text: "Sistema de distribuição inteligente que garante que a água filtrada e monitorada chegue a todos os pontos necessários de forma eficiente. Controle remoto via app permite gerenciar fluxos, detectar vazamentos e otimizar o consumo.",
    },
  ];

  return (
    <section className="w-full min-h-screen text-white px-6 md:px-20 py-16 flex flex-col items-center">
      
      {/* Título super rápido */}
      <motion.div 
        className="flex flex-col justify-center items-center pt-5 mb-16"
        initial={{ opacity: 0, filter: "blur(6px)", y: 15 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className="text-xl md:text-5xl font-bold font-zalando text-[#0D6DFF] mb-4 text-center">
          O QUE NOSSO SISTEMA DE TANQUE OFERECE
        </h1>
      </motion.div>

      {/* Grid de cards ultra rápido */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r font-zalando h-72 from-blue-600 to-blue-500 rounded-xl p-6 flex flex-col justify-between shadow-lg hover:scale-[1.02] transition-transform duration-300"
            initial={{ 
              opacity: 0, 
              filter: "blur(4px)", 
              x: index % 2 === 0 ? -30 : 30 
            }}
            whileInView={{ 
              opacity: 1, 
              filter: "blur(0px)", 
              x: 0 
            }}
            transition={{ 
              duration: 0.4, 
              ease: "easeOut",
              delay: index * 0.05 // Delay mínimo para sequência
            }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <div className="">
              <h3 className="text-center pb-3 text-lg font-semibold">{card.title}</h3>
              <p className="text-sm text-justify text-gray-200 mt-2">{card.text}</p>
            </div>
            <button className="mb-2 mt-2 w-full bg-white text-[#0D6DFF] px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors self-start">
              Saber mais
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhoTouse;