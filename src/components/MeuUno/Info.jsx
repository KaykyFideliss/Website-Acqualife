import React, { memo, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useFetchData } from "../../hooks/useFetchData";
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
import { IoSettingsSharp } from "react-icons/io5";

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
  const [history, setHistory] = useState([]);
  const [modalChart, setModalChart] = useState(null);
  const [modalUser, setModalUser] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const historyRef = useRef([]);

  useEffect(() => {
    if (data && data.volume1 !== undefined) {
      const now = new Date();
      const time = now.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      const updatedHistory = [
        ...historyRef.current.slice(-19),
        {
          time,
          volume1: data.volume1,
          volume2: data.volume2,
          ph: data.ph,
        },
      ];

      historyRef.current = updatedHistory;
      setHistory([...updatedHistory]);
    }
  }, [data]);

  // Loading state melhorado
  if (loading && history.length === 0) {
    return (
      <section className="w-full min-h-screen text-white px-6 md:px-20 py-16 flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        <p className="text-xl mt-4">Carregando dados do sistema...</p>
      </section>
    );
  }

  const TankChart = ({ fullscreen }) => (
    <ResponsiveContainer width="100%" height={fullscreen ? 700 : 500}>
      <LineChart data={history}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ffff" />
        <XAxis dataKey="time" stroke="#ffff" interval={0} />
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
      <LineChart data={history}>
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
      </motion.div>

      {/* Ícone de Config */}
      <div className="w-full flex justify-end max-w-6xl mb-6"> 
        <button
          className="text-azul-style text-3xl hover:text-blue-400"
          onClick={() => setModalUser(true)}
        >
          <IoSettingsSharp />
        </button>
      </div>

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
            Histórico de Níveis dos Tanques
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
          Histórico Completo dos Tanques
        </h2>
        <div className="overflow-x-auto scroll-thin">
          <table className="w-full table-auto border-collapse rounded-xl font-zalando">
            <thead>
              <tr className="bg-white text-azul-style">
                <th className="px-4 py-2 border">Horário</th>
                <th className="px-4 py-2 border">Volume Tanque 1 (ML)</th>
                <th className="px-4 py-2 border">Volume Tanque 2 (ML)</th>
                <th className="px-4 py-2 border">pH</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-blue-500" : "bg-blue-600"}
                >
                  <td className="px-4 py-2 border">{item.time}</td>
                  <td className="px-4 py-2 border">{item.volume1}</td>
                  <td className="px-4 py-2 border">{item.volume2}</td>
                  <td className="px-4 py-2 border">{item.ph.toFixed(2)}</td>
                </tr>
              ))}
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
        Atualizando automaticamente...
      </motion.div>

      {/* MODAIS (mantidos iguais) */}
      {modalUser && (
        <div className="fixed inset-0 bg-black/75 overflow-hidden flex items-center justify-center z-50 p-4">
          {/* ... código do modal usuário igual ... */}
        </div>
      )}

      {modalChart && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          {/* ... código do modal gráfico igual ... */}
        </div>
      )}
    </section>
  );
};

export default memo(Info);