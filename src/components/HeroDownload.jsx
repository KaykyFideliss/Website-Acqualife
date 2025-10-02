import React from 'react';

const HeroDownload = () => {
  return (
    <section className="w-full h-screen mt-36">
      <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 lg:px-40">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0 md:mr-10">
          <div className="flex justify-center md:justify-start items-center mb-4">
            
            <h2 className="text-2xl md:text-4xl font-bold font-zalando text-[#0D6DFF] ">ACQUALIFE</h2>
            <img className=" w-20 h-20" src="/img/logo.png" alt="Logo-ACQUALIFE" />
          </div>
          <h2 className="font-zalando text-2xl text-[#0d6dff] font-bold md:text-3xl mb-2">
            Nós criamos, mas é você que economiza.
          </h2>
          <p className="font-zalando text-base text-gray-700 text-justify md:pr-20">
            O ACQUALIFE coloca a água da sua casa na palma da sua mão! Sistema compacto de captação e filtragem de chuva, com monitoramento via app. Instale e comece a economizar água!
          </p>

          <button className=' font-zalando bg-[#0d6dff] p-3 rounded-full mt-7 text-slate-50'
           onClick={(e) => { e.preventDefault(); scrollToSection("project"); }}
          >Baixe Agora</button>
        </div>

        {/* Vídeo */}
        <div className="flex-1 flex justify-center md:justify-start bg-black">
          <video
            className="w-full max-w-md h-auto rounded-lg"
            src="https://youtu.be/1OXqbgQ3tic?si=ch4PAQ_9vniGlV4f" // Coloque o caminho do seu vídeo
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  );
};

export default HeroDownload;
