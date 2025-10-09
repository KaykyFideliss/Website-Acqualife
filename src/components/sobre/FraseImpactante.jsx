import React from 'react'
import { motion } from 'framer-motion'

const FraseImpactante = () => {
  return (
    <section className="w-full min-h-screen overflow-x-hidden overflow-y-auto">
      {/* Título */}
     <motion.div
  className="justify-center items-center pt-20"
  initial={{ opacity: 0, filter: "blur(10px)", y: 30 }} // começa desfocado e abaixo
  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }} // aparece nítido
  exit={{ opacity: 0, filter: "blur(10px)", y: -30 }} // some pra cima desfocando
  transition={{
    duration: 2.0,
    ease: "easeOut",
  }}
  viewport={{ once: false, amount: 0.4 }} 
>
  <h1 className="text-xl md:text-5xl font-bold font-zalando text-[#0D6DFF] mb-4 text-center">
    ACQUALIFE
  </h1>
</motion.div>


      {/* Container principal */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-6 pt-20">
        
        {/* Imagem à esquerda */}
        <motion.div
          className="w-80 h-80 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, x: -80, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src="/img/sobre/calha.jpg"
            alt="Criança abraçando uma árvore"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>

        {/* Card azul à direita */}
        <motion.div
          className="w-80 h-80 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-azul-style text-white rounded-2xl p-6 flex flex-col justify-between overflow-hidden"
          initial={{ opacity: 0, x: 80, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="flex flex-col justify-center items-center  px-2">
            <h2 className="text-base md:text-4xl font-bold mb-3 font-zalando leading-tight pb-5 text-left">
              Cuide da Água, Preserve o Futuro
            </h2>
            <p className="text-sm md:text-base font-zalando leading-relaxed text-justify">
              O projeto AcquaLife busca explorar a importância da preservação da água e
              dos ecossistemas aquáticos, utilizando abordagens criativas e tecnológicas
              para promover a conscientização ambiental. Ele tem como objetivo
              compreender os impactos da escassez hídrica e da poluição sobre a vida
              aquática e humana, combinando pesquisa e conteúdo multimídia para
              informar, inspirar e engajar a comunidade em ações de sustentabilidade e
              uso responsável da água.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FraseImpactante
