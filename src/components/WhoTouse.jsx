import React from "react";
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
      
      {/* Título */}
      <div className="flex flex-col justify-center items-center pt-10 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-zalando text-[#0D6DFF] mb-4 text-center">
          CONTROLE TOTAL DA QUALIDADE DA SUA ÁGUA
        </h1>
      </div>

      {/* Grid de cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  w-full max-w-5xl">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-gradient-to-r font-zalando h-72 from-blue-600 to-blue-500 rounded-xl p-6 flex flex-col justify-between shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="">
              <h3 className=" text-center pb-3 text-lg font-semibold">{card.title}</h3>
              <p className="text-sm text-gray-200 mt-2">{card.text}</p>
            </div>
            <button className=" mb-2 mt-7 w-full bg-white text-[#0D6DFF] px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors self-start">
              Saber mais
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoTouse;
