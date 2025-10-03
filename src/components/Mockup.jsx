import React from 'react'

const Mockup = () => {
  return (
     <section className="w-full h-screen text-white ">
      
      
      {/* Título */}
      <div className="flex flex-col justify-center items-center text-center mb-4">
        <h1 className="text-4xl md:text-7xl font-bold font-zalando text-[#0D6DFF] mb-4">
          UM APP TOTALMENTE PRA VOCÊ
        </h1>
        
      </div>  

      <div className=''>
        {/* TEXTO */}
        <div className='flex justify-center items-center mx-14'>
        <p className='text-center font-zalando font-normal text-gray-700 px-6 md:px-20 lg:px-40'> 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse omnis vel pariatur dolore nam totam. Quo, tenetur? Eum dolores, commodi odit impedit earum error dolorum voluptatum placeat ea, accusamus eveniet.
          </p>
          </div>

        {/* IMAGEM */}
        <div className='flex justify-center items-center pt-10'>
          <img 
          className='max-w-full h-auto rounded-lg' 
          src="/img/home/3Mockeup.png" alt="Preview" 
          />
        </div>
      </div>




    </section>
  )
}

export default Mockup
