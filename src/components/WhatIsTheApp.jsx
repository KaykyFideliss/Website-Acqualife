import React from 'react';

const WhatIsTheApp = () => {
  return (
    <section id="sobre" className="  w-full h-screen py-10 md:py-20 md:pl-10">
      {/* Título */}
      <div className="flex flex-col justify-center items-center text-center mb-10">
        <h1 className="text-4xl md:text-7xl font-bold font-zalando text-[#0D6DFF] mb-4">
          QUEM SOMOS
        </h1>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 lg:px-40">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left mb-4 md:mb-0 md:mr-10">
          <h2 className="text-2xl md:text-4xl font-bold font-zalando text-[#0D6DFF] mb-4">
           Como Inicou
          </h2>
          <p className="font-zalando text-base text-gray-700 text-justify md:pt-7">
            O Acqualife é um sistema automatizado que capta, filtra e reutiliza água da chuva para fins não potáveis, como descarga, limpeza e irrigação, em residências, promovendo economia, sustentabilidade e consciência ambiental, reduzindo o uso de água potável da rede pública.
          </p>
        </div>

        {/* Imagem */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            className="max-w-full h-auto rounded-lg"
            src="./public/img/home/mockeup-acqualife.png"
            alt="Preview"
          />
        </div>
      </div>
        {/* Conteúdo */}
      <div className=" pt-28 flex flex-col md:flex-row items-center justify-center px-4 md:px-20 lg:px-40">
       

        {/* Imagem */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            className="max-w-full h-auto rounded-lg"
            src="./public/img/home/mockeup-acqualife.png"
            alt="Preview"
          />
        </div>
         {/* Texto */}
        <div className="flex-1 text-center md:text-left mb-4 md:mb-0 md:mr-10">
          <h2 className="text-2xl md:text-4xl font-bold font-zalando text-[#0D6DFF] mb-4">
           Por que criamos o Acqualife
          </h2>
          <p className="font-zalando text-base text-gray-700 text-justify md:pt-7">
            O projeto Acqualife foi desenvolvido porque observamos que muitas residências não possuem sistemas eficientes para captar e reutilizar a água da chuva. Essa ausência aumenta o desperdício, compromete a sustentabilidade urbana e torna famílias mais dependentes da água da rede pública, especialmente em regiões com infraestrutura limitada, como algumas áreas de Contagem (MG).
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsTheApp;
