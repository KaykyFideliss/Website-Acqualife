import React from 'react'
import { BubbleBackground } from './BubbleBackground';

const Hero = () => {
  return (
        <section id='home' className=' h-screen flex items-center justify-center overflow-hidden '>
          
 {/* Fade no rodapé */}
  <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>

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

        <div className='absolute z-10 text-center px-4'>
            <h1 className='text-shadow-lg/30 text-5xl md:text-9xl font-bold font-zalando text-white mb-4 '>ACQUALIFE</h1>
            <p className='text-lg font-zalando text-bold md:text-2xl text-white  mb-8'>Transformando gotas em esperanças</p>
        
        </div>
    
     

    </section>
    
    
  )
}

export default Hero
