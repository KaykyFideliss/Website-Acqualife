import React from 'react'
import { motion } from 'framer-motion'

const Motivation = () => {
  // Animação para o texto
  const textVariants = {
    hidden: { 
      opacity: 0, 
      filter: "blur(10px)",
      y: 20 
    },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  // Animação escalonada para cada palavra/span
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  return (
    <section className="py-20 w-full h-screen flex items-center justify-center bg-white px-6">

    <motion.div 
  className=" text-center text-gray-900 text-5xl md:text-7xl font-bold font-zalando leading-snug"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ amount: 0.2, margin: "-100px" }}
>
  <motion.span variants={textVariants} className="inline-block">
    Faça
  </motion.span>{' '}
  <motion.span variants={textVariants} className="inline-block text-blue-500">
    da
  </motion.span>{' '}
  <motion.span variants={textVariants} className="inline-block text-blue-500">
    água
  </motion.span>{' '}
  <motion.span variants={textVariants} className="inline-block text-blue-500">
    da
  </motion.span>{' '}
  <motion.span variants={textVariants} className="inline-block text-blue-500">
    chuva
  </motion.span>{' '}
  <motion.span variants={textVariants} className="inline-block">
    um
  </motion.span>{' '}
  <motion.span variants={textVariants} className="inline-block text-blue-500">
    recurso
  </motion.span>{' '}
  <motion.span variants={textVariants} className="inline-block">
    de
  </motion.span>{' '}
  <motion.span variants={textVariants} className="inline-block text-blue-500">
    transformação
  </motion.span>{' '}
  <motion.span variants={textVariants} className="inline-block">
    e
  </motion.span>{' '}
  <motion.span variants={textVariants} className="inline-block text-blue-500">
    cuidado
  </motion.span>{' '}
  <motion.span variants={textVariants} className="inline-block">
    com
  </motion.span>{' '}
  <motion.span variants={textVariants} className="inline-block text-blue-500">
    o
  </motion.span>{' '}
  <motion.span variants={textVariants} className="inline-block text-blue-500">
    planeta.
  </motion.span>
</motion.div>


    </section>
  )
}

export default Motivation