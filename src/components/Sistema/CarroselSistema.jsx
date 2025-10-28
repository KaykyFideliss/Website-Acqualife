import React from 'react'
import { motion } from "framer-motion"
import VideoPlayer from './Video-player'

const CarroselSistema = () => {
  return (
    <section className="w-full min-h-screen text-white px-6 md:px-20 py-16 flex flex-col items-center">

      {/* Título super rápido */}
      <motion.div
        className=" pt-5 mb-16"
        initial={{ opacity: 0, filter: "blur(6px)", y: 15 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className="text-xl md:text-5xl font-bold font-zalando text-[#0D6DFF] mb-1 text-center mt-8">
          O CÉREBRO INTELIGENTE DO ACQUALIFE
        </h1>
      </motion.div>
      <div className='flex justify-center items-center mx-2 px-4 md:mx-24 lg:mx-48'>
        <div className='text-justify '>
          <p className='font-zalando text-base text-gray-900 mb-6 md:text-xl'>
            Nosso sistema, movido por Arduino, monitora e reutiliza a água de forma inteligente, controlando sensores, filtros e bombas com eficiência e segurança. O Acqualife reduz o desperdício e torna o uso da água mais consciente,você acompanha tudo em tempo real pelo nosso aplicativo.
          </p>
          <p className='font-zalando text-base text-gray-900 mb-2 md:text-xl'>
            Fácil de instalar, escalável e sustentável, o Acqualife se adapta a residências, escolas, empresas e prédios públicos, oferecendo uma solução prática para economizar água e reduzir custos. Com tecnologia acessível e monitoramento em tempo real, ele transforma a forma como você consome e valoriza esse recurso essencial, promovendo um impacto positivo no meio ambiente e na comunidade.
          </p>
        </div>
      </div>

      {/* VIDEO
      <div className="flex justify-center items-center  px-4 md:px-24 lg:px-24 mt-8">
        <div className="w-full max-w-4xl">
          <VideoPlayer />
        </div>
      </div> */}


      <p className=' font-zalando text-justify text-xl'>
      </p>

    </section>
  )
}

export default CarroselSistema
