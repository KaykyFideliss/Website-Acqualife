import React from 'react'
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";

const AcessLogin = () => {
   const navigate = useNavigate();
    return (

        <section className="w-full text-center py-20 md:py-40 justify-center bg-white px-6">

            {/* Título */}
            <motion.div
                className="flex flex-col justify-center items-center pt-5 mb-16"
                initial={{ opacity: 0, filter: "blur(6px)", y: 15 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <h1 className="text-xl md:text-5xl font-bold font-zalando text-[#0D6DFF] mb-4 text-center">
                    LOGUE E UTILIZE DE FORMA ONLINE
                </h1>
            </motion.div>

            <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 px-4 md:px-8 lg:px-0 mx-auto max-w-6xl'>
                {/* TEXTO */}
                <div className='md:flex-1 text-center md:text-left'>
                    <p className='text-lg leading-relaxed font-zalando text-justify'>
                        Cadastre-se e tenha acesso total aos dados do seu sistema do Acqualife em tempo real.
                        Monitore o pH e o nível de água, tudo diretamente integrado ao seu Arduino. </p>
                        <br />
                    <p className='text-lg leading-relaxed font-zalando text-justify'>Conecte-se agora e descubra como o AcquaLife transforma o acompanhamento do seu sistema em uma experiência simples, inteligente e totalmente online.</p>

                    <button className="items-center mb-2 mt-10 w-full md:w-72 bg-azul-style text-white font-zalando px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-500 transition-colors"
                    onClick={() => navigate("/cadastro")}
                    >Cadastre-se já</button>
                </div>

                {/* IMAGENS */}
                <div className='flex flex-col gap-8 w-full md:w-auto'>
                    <img src="/img/home/banner1.png" alt="" className='h-48 md:h-64 w-full md:w-auto max-w-full object-cover rounded-lg' />
                    <img src="/img/home/banner2.png" alt="" className='h-48 md:h-64 w-full md:w-auto max-w-full object-cover rounded-lg' />
                </div>
            </div>

        </section>
    )
}

export default AcessLogin