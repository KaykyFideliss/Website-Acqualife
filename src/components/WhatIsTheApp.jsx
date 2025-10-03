import React from 'react';
import { motion } from 'framer-motion';

const WhatIsTheApp = () => {
  return (
    <section id="sobre" className="w-full py-10 md:py-20 md:pl-10">
      {/* Título com blur in */}
      <motion.div 
        className="flex flex-col justify-center items-center text-center mb-10"
        initial={{ 
          opacity: 0, 
          filter: "blur(10px)",
          y: 30 
        }}
        whileInView={{ 
          opacity: 1, 
          filter: "blur(0px)",
          y: 0 
        }}
        transition={{ 
          duration: 1,
          ease: "easeOut" 
        }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <h1 className="text-4xl md:text-7xl font-bold font-zalando text-[#0D6DFF] mb-4">
          QUEM SOMOS
        </h1>
      </motion.div>  

      {/* Primeiro bloco */}
      <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 lg:px-40">
        {/* Texto - vem da esquerda com blur in */}
        <motion.div 
          className="flex-1 text-center md:text-left mb-6 md:mb-0 md:mr-10"
          initial={{ 
            opacity: 0, 
            filter: "blur(8px)",
            x: -50 
          }}
          whileInView={{ 
            opacity: 1, 
            filter: "blur(0px)",
            x: 0 
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2
          }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold font-zalando text-[#0D6DFF] mb-4">
            Como Iniciou
          </h2>
          <p className="font-zalando text-base text-gray-700 text-justify md:pt-7">
            O Acqualife é um sistema automatizado que capta, filtra e reutiliza água da chuva
            para fins não potáveis, como descarga, limpeza e irrigação, em residências,
            promovendo economia, sustentabilidade e consciência ambiental.
          </p>
        </motion.div>

        {/* Imagem - vem da direita com blur in */}
        <motion.div 
          className="flex-1 flex justify-center md:justify-start"
          initial={{ 
            opacity: 0, 
            filter: "blur(8px)",
            x: 50 
          }}
          whileInView={{ 
            opacity: 1, 
            filter: "blur(0px)",
            x: 0 
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut",
            delay: 0.4
          }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <img
            className="max-w-full h-auto rounded-lg"
            src="/img/home/mockeup-acqualife.png"
            alt="Preview"
          />
        </motion.div>
      </div>

      {/* Segundo bloco */}
      <div className="pt-28 px-4 md:px-20 lg:px-40">
        <div className="flex flex-col md:flex-row-reverse items-center justify-center">
          {/* Texto - vem da direita com blur in */}
          <motion.div 
            className="flex-1 text-center md:text-left mb-6 md:mb-0 md:ml-10"
            initial={{ 
              opacity: 0, 
              filter: "blur(8px)",
              x: 50 
            }}
            whileInView={{ 
              opacity: 1, 
              filter: "blur(0px)",
              x: 0 
            }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold font-zalando text-[#0D6DFF] mb-4">
              Por que criamos o Acqualife
            </h2>
            <p className="font-zalando text-base text-gray-700 text-justify md:pt-7">
              O projeto Acqualife foi desenvolvido porque observamos que muitas residências não possuem
              sistemas eficientes para captar e reutilizar a água da chuva. Essa ausência aumenta o desperdício
              e compromete a sustentabilidade urbana.
            </p>
          </motion.div>

          {/* Imagem - vem da esquerda com blur in */}
          <motion.div 
            className="flex-1 flex justify-center md:justify-start"
            initial={{ 
              opacity: 0, 
              filter: "blur(8px)",
              x: -50 
            }}
            whileInView={{ 
              opacity: 1, 
              filter: "blur(0px)",
              x: 0 
            }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut",
              delay: 0.4
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <img
              className="max-w-full h-auto rounded-lg"
              src="/img/home/mockeup-acqualife.png"
              alt="Preview"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsTheApp;