import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-azul-style w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-10 py-1 text-white font-zalando">
        
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img src="img/logo-branca.png" alt="Logo Acqualife" className="w-32 h-32" />
        </div>

<div className='flex flex-col items-center md:items-center'>
        {/* Links */}
        <h1 className='text-white font-zalando font-bold'></h1>
        <ul className="flex space-x-6 mt-6 md:mt-0 text-sm md:text-base">
          
          <li className="cursor-pointer hover:text-gray-300 transition">Home</li>
          <li className="cursor-pointer hover:text-gray-300 transition">Download</li>
          <li className="cursor-pointer hover:text-gray-300 transition">Sistema</li>
         
        </ul>
        </div>
      </div>

      {/* Copy */}
      <div className="text-center font-zalando text-white text-xs sm:text-sm py-4 border-t border-white/20">
        &copy; {new Date().getFullYear()} Acqualife. Todos os direitos reservados.
      </div>
    </footer>
  )
}

export default Footer
