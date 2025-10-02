import React from 'react'
import { DiAndroid,DiApple } from "react-icons/di";


const DownloadApp = () => {
  return (
     <section className="h-screen w-full text-center mt-40 justify-center bg-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold font-zalando text-[#0D6DFF] mb-12">
          BAIXE O ACQUALIFE AGORA MESMO
        </h1>

        {/* Linha de cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* ANDROID */}
          <div className="border-2 border-blue-400 rounded-xl p-6 flex flex-col items-center bg-white shadow-md w-60">
                      <DiAndroid  size={90} className="mb-4 text-[#0D6DFF]" />
            <p className="mb-4 font-semibold font-zalando">Windows</p>
            <button className="bg-[#0D6DFF] text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-500">
              DOWNLOAD
            </button>
          </div>

          {/* IOS */}
          <div className="border-2 border-blue-400  rounded-xl p-6 flex flex-col items-center bg-white shadow-md w-60">
             <DiApple size={90} className="mb-4 text-[#0D6DFF]" />
            <p className="mb-4 font-semibold font-zalando">IOS</p>
            
            <button className="bg-[#0D6DFF] text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-500">
              DOWNLOAD EM BREVE
            </button>
          </div>

        </div>
      </section>
  )
}

export default DownloadApp 
