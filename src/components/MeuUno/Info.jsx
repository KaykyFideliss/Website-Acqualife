import React, { memo } from "react";
import { motion } from "framer-motion";
import { useFetchData } from "../../hooks/useFetchData";

// ✅ memo para evitar re-renders desnecessários
const InfoCard = memo(({ title, value, unit, delay }) => (
  <motion.div 
    className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-6 font-zalando shadow-lg hover:scale-[1.02] transition-transform duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay }}
  >
    <h3 className="text-center pb-3 text-lg font-semibold">{title}</h3>
    <p className="text-5xl text-center font-bold text-gray-200 mt-2">
      {value} {unit}
    </p>
  </motion.div>
));

const Info = () => {
  const { data, loading } = useFetchData();

  // ✅ Evitar re-render com dados antigos
  if (loading && data.volume1 === 0) {
    return (
      <section className="w-full min-h-screen text-white px-6 md:px-20 py-16 flex flex-col items-center">
        <div className="flex justify-center items-center h-40">
          <p className="text-xl">Carregando...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full min-h-screen text-white px-6 md:px-20 py-16 flex flex-col items-center">
      <motion.div 
        className="flex flex-col justify-center items-center pt-5 mb-16"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-xl md:text-5xl font-bold font-zalando text-[#0D6DFF] mb-4 text-center">
          MEU SISTEMA ACQUALIFE
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <InfoCard 
          title="NÍVEL TANQUE 1" 
          value={data.volume1} 
          unit="ML"
          delay={0.1}
        />
        <InfoCard 
          title="NÍVEL TANQUE 2" 
          value={data.volume2} 
          unit="ML"
          delay={0.2}
        />
        <InfoCard 
          title="PH" 
          value={data.ph} 
          unit=""
          delay={0.3}
        />
      </div>

      {/* ✅ Indicador de atualização sutil */}
      <motion.div 
        className="mt-8 text-sm text-gray-400 flex items-center gap-2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-2 h-2 animate-pulse bg-green-600 rounded-full"></div>
        Atualizando automaticamente...
      </motion.div>
    </section>
  );
};

export default memo(Info);