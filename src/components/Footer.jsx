import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-azul-style w-full">
      
  
<div className='w-full items-center  '>
    {/* Logo */}
        <div className="flex justify-center pb-2">
          <img src="img/logo-branca.png" alt="Logo Acqualife" className="w-32 h-32" />
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
