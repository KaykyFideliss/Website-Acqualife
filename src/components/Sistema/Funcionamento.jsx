import React from 'react'
import { motion } from "framer-motion";


const Funcionamento = () => {
  return (      
      <section className='w-full h-screen '>

         {/* Título super rápido */}
      <motion.div 
        className=" pt-2 mb-16"
        initial={{ opacity: 0, filter: "blur(6px)", y: 15 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className="text-2xl md:text-5xl font-bold font-zalando text-[#0D6DFF] mb-4 text-center mt-8">
          COMO FUNCIONA O NOSSO SISTEMA
        </h1>
      </motion.div>


      
      </section>
    
  )
}

export default Funcionamento;
