import React from 'react'
import { motion } from 'framer-motion'

const Second = () => {
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
        className="text-center text-gray-900 text-5xl md:text-7xl font-bold font-zalando leading-snug"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, margin: "-100px" }}
      >
        <motion.span variants={textVariants} className="inline-block">
          Transforme
        </motion.span>{' '}
        <motion.span 
          variants={textVariants} 
          className="inline-block text-blue-500"
        >
          cada gota de chuva
        </motion.span>{' '}
        <motion.span variants={textVariants} className="inline-block">
          em uma
        </motion.span>{' '}
        <motion.span 
          variants={textVariants} 
          className="inline-block text-blue-500"
        >
          ação sustentável.
        </motion.span>
      </motion.div>
    </section>
  )
}

export default Second