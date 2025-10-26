import React from "react";
import { motion } from "framer-motion";
import { useFetchData } from "../../hooks/useFetchData";

const Info = () => {
  // ✅ CORRETO: hook retorna objeto com data, loading, error
  const { data, loading, error } = useFetchData();

  if (loading) {
    return (
      <section className="w-full min-h-screen text-white px-6 md:px-20 py-16 flex flex-col items-center">
        <div className="flex justify-center items-center h-40">
          <p className="text-xl">Carregando dados...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full min-h-screen text-white px-6 md:px-20 py-16 flex flex-col items-center">
        <div className="flex justify-center items-center h-40">
          <p className="text-xl text-red-400">Erro: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full min-h-screen text-white px-6 md:px-20 py-16 flex flex-col items-center">
      {/* Título */}
      <motion.div 
        className="flex flex-col justify-center items-center pt-5 mb-16"
        initial={{ opacity: 0, filter: "blur(6px)", y: 15 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h1 className="text-xl md:text-5xl font-bold font-zalando text-[#0D6DFF] mb-4 text-center">
          MEU SISTEMA ACQUALIFE
        </h1>
      </motion.div>

      {/* Grid de cards - DADOS ÚNICOS, não array */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <motion.div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-6 font-zalando shadow-lg hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-center pb-3 text-lg font-semibold">NÍVEL TANQUE 1</h3>
          <p className="text-5xl text-center font-bold text-gray-200 mt-2">
            {data.volume1} ML
          </p>
        </motion.div>

        <motion.div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-6 font-zalando shadow-lg hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-center pb-3 text-lg font-semibold">NÍVEL TANQUE 2</h3>
          <p className="text-5xl text-center font-bold text-gray-200 mt-2">
            {data.volume2} ML
          </p>
        </motion.div>

        <motion.div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-6 font-zalando shadow-lg hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-center pb-3 text-lg font-semibold">PH</h3>
          <p className="text-5xl text-center font-bold text-gray-200 mt-2">
            {data.ph}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Info;