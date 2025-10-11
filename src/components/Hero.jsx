import React from 'react'
import { motion } from 'framer-motion'
import { BubbleBackground } from './BubbleBackground';

const Hero = () => {
  return (
    <section id='home' className='h-screen flex items-center justify-center overflow-hidden'>
      
     

      <BubbleBackground
        interactive
        className="absolute inset-0 z-0 h-screen w-screen"
        colors={{
          first: '18,113,255',
          second: '18,113,255',
          third: '18,113,255',
          fourth: '18,113,255',
          fifth: '18,113,255',
          sixth: '18,113,255',
        }}

        
      />



      {/* Texto com efeito blur in */}
      <motion.div 
        className='absolute z-10 text-center px-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className='text-shadow-lg/30 text-5xl md:text-9xl font-bold font-zalando text-white mb-4'
          initial={{ 
            opacity: 0, 
            filter: "blur(15px)",
            y: 40 
          }}
          animate={{ 
            opacity: 1, 
            filter: "blur(0px)",
            y: 0 
          }}
          transition={{ 
            duration: 1.2,
            ease: "easeOut",
            delay: 0.3 
          }}
        >
          ACQUALIFE
        </motion.h1>
        
        <motion.p 
          className='text-lg font-zalando text-bold md:text-2xl text-white mb-8'
          initial={{ 
            opacity: 0, 
            filter: "blur(12px)",
            y: 30 
          }}
          animate={{ 
            opacity: 1, 
            filter: "blur(0px)",
            y: 0 
          }}
          transition={{ 
            duration: 1,
            ease: "easeOut",
            delay: 0.8 
          }}
        >
          Transformando gotas em esperanças
        </motion.p>
      </motion.div>

          
    </section>
  )
}

export default Hero