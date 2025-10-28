import React, { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useFetchData } from "../../hooks/useFetchData";
import { useFetchHistory } from "../../hooks/useFetchHistory";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { IoSettingsSharp, IoRefresh } from "react-icons/io5";

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
  const { data, loading, error, lastUpdate, refetch } = useFetchData();
  const { history: historyFromDB, loading: historyLoading, refetch: refetchHistory } = useFetchHistory();
  const [modalChart, setModalChart] = useState(null);
  const [modalUser, setModalUser] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(0);
  
  const user = JSON.parse(localStorage.getItem("user")) || {};

  // ✅ CORREÇÃO: Verificar se historyFromDB existe antes de mapear
  const displayHistory = historyFromDB ? historyFromDB.map(item => ({
    time: item.time,
    volume1: item.volume1,
    volume2: item.volume2,
    ph: item.ph
  })) : [];

  // ✅ Forçar atualização periódica do componente
  useEffect(() => {
    const interval = setInterval(() => {
      setForceUpdate(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // ✅ Atualizar manualmente
  const handleRefresh = () => {
    refetch();
    refetchHistory();
    setForceUpdate(prev => prev + 1);
  };

  // ✅ CORREÇÃO: Loading state mais flexível
  if ((loading || historyLoading) && displayHistory.length === 0) {
    return (
      <section className="w-full min-h-screen text-white px-6 md:px-20 py-16 flex flex-col items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"
        />
        <p className="text-xl mt-4">Carregando dados do sistema...</p>
      </section>
    );
  }

  const TankChart = ({ fullscreen }) => (
    <ResponsiveContainer width="100%" height={fullscreen ? 700 : 500}>
      <LineChart data={displayHistory} key={forceUpdate}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ffff" />
        <XAxis 
          dataKey="time" 
          stroke="#ffff" 
          interval={0}
        />
        <YAxis
          stroke="#ffff"
          domain={[0, 7000]}
          ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000, 7000]}
        />
        <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "10px" }} />
        <Legend />
        <Line
          type="monotone"
          dataKey="volume1"
          stroke="#00ffff"
          strokeWidth={3}
          dot={false}
          isAnimationActive={true}
          animationDuration={800}
        />
        <Line
          type="monotone"
          dataKey="volume2"
          stroke="#00bfff"
          strokeWidth={3}
          dot={false}
          isAnimationActive={true}
          animationDuration={800}
        />
      </LineChart>
    </ResponsiveContainer>
  );

  const PHChart = ({ fullscreen }) => (
    <ResponsiveContainer width="100%" height={fullscreen ? 700 : 500}>
      <LineChart data={displayHistory} key={forceUpdate}>
        <CartesianGrid strokeDasharray="3 3 " stroke="#fff" />
        <XAxis dataKey="time" stroke="#ffff" interval={0} />
        <YAxis
          stroke="#fff"
          domain={[0, 14]}
          ticks={[0, 2, 4, 6, 8, 10, 12, 14]}
          interval={0}
        />
        <Tooltip contentStyle={{ backgroundColor: "#4F4F4F", borderRadius: "10px" }} />
        <Line
          type="monotone"
          dataKey="ph"
          stroke="#00ff99"
          strokeWidth={3}
          dot={false}
          isAnimationActive={true}
          animationDuration={800}
        />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <section className="w-full min-h-screen text-white px-6 md:px-20 py-16 flex flex-col items-center">
      {/* Título */}
      <motion.div
        className="flex flex-col justify-center items-center pt-5 mb-16 relative w-full max-w-6xl"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-xl md:text-5xl font-bold font-zalando text-[#0D6DFF] mb-4 text-center">
          MEU SISTEMA ACQUALIFE
        </h1>
        <p className="text-gray-600 text-sm">
          Dados em tempo real - Atualizado: {data.timestamp || 'Carregando...'}
        </p>
      </motion.div>


      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <InfoCard title="NÍVEL TANQUE 1" value={data.volume1 || 0} unit="ML" delay={0.1} />
        <InfoCard title="NÍVEL TANQUE 2" value={data.volume2 || 0} unit="ML" delay={0.2} />
        <InfoCard title="PH" value={data.ph ? data.ph.toFixed(2) : '0.00'} unit="" delay={0.3} />
      </div>

      {/* GRÁFICOS */}
      <div className="w-full max-w-6xl mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div
          className="bg-azul-style p-6 rounded-2xl shadow-lg cursor-pointer hover:scale-[1.01] transition-transform"
          onClick={() => setModalChart("tanques")}
        >
          <h2 className="text-lg font-zalando font-semibold mb-4 text-white flex justify-center">
            Histórico de Nível do Tanque
          </h2>
          <TankChart fullscreen={false} />
        </div>

        <div
          className="bg-azul-style p-6 rounded-2xl shadow-lg cursor-pointer hover:scale-[1.01] transition-transform"
          onClick={() => setModalChart("ph")}
        >
          <h2 className="text-lg font-semibold mb-4 text-white font-zalando flex justify-center">
            Histórico de pH
          </h2>
          <PHChart fullscreen={false} />
        </div>
      </div>

      {/* HISTÓRICO COMPLETO */}
      <div className="w-full max-w-6xl mt-10 bg-azul-style p-6 rounded-2xl shadow-lg text-white scroll-thin">
        <h2 className="text-lg font-zalando font-semibold mb-4 flex justify-center">
          Histórico Completo (Últimas 50 leituras)
        </h2>
        <div className="overflow-x-auto scroll-thin">
          <table className="w-full table-auto border-collapse rounded-xl font-zalando">
            <thead>
              <tr className="bg-white text-azul-style">
                <th className="px-4 py-2 border">Horário</th>
                <th className="px-4 py-2 border">Volume Tanque (ML)</th>
                <th className="px-4 py-2 border">pH</th>
              </tr>
            </thead>
            <tbody>
              {/* ✅ CORREÇÃO: Verificação de segurança */}
              {displayHistory && displayHistory.length > 0 ? (
                displayHistory.slice(0, 50).map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-blue-500" : "bg-blue-600"}
                  >
                    <td className="px-4 py-2 border">{item.time}</td>
                    <td className="px-4 py-2 border">{item.volume1}</td>
                    <td className="px-4 py-2 border">{item.ph?.toFixed(2)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="px-4 py-4 text-center border">
                    Nenhum dado histórico disponível
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Indicador de Atualização */}
      <motion.div
        className="mt-8 text-sm text-gray-400 flex items-center gap-2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-2 h-2 animate-pulse bg-green-600 rounded-full"></div>
        Conectado ao banco de dados - Atualizando automaticamente...
      </motion.div>

      {/* MODAIS DOS GRÁFICOS */}
      {modalChart && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-azul-style rounded-2xl p-6 w-full max-w-6xl max-h-[90vh] overflow-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                {modalChart === "tanques" 
                  ? "Histórico de Nível do Tanque" 
                  : "Histórico de pH"
                }
              </h2>
              <button
                onClick={() => setModalChart(null)}
                className="text-white text-2xl hover:text-gray-300"
              >
                ✕
              </button>
            </div>
            
            {modalChart === "tanques" ? (
              <TankChart fullscreen={true} />
            ) : (
              <PHChart fullscreen={true} />
            )}
            
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setModalChart(null)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* MODAL USUÁRIO */}
      {modalUser && (
        <div className="fixed inset-0 bg-black/75 overflow-hidden flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-white rounded-2xl p-8 w-full max-w-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
         
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Usuário
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={user.name || ""}
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={user.email || ""}
                  placeholder="seu@email.com"
                />
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors font-semibold">
                Salvar Configurações
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <button
                onClick={handleRefresh}
                className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors"
              >
                <IoRefresh className={`text-lg ${loading ? 'animate-spin' : ''}`} />
                Atualizar Dados Agora
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default memo(Info);