// hooks/useFetchData.js - VERSÃO SUAVE (sem piscar)
import { useState, useEffect, useRef } from "react";

export const useFetchData = () => {
  const [data, setData] = useState({ volume1: 0, volume2: 0, ph: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const previousData = useRef(data); // armazena último valor

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("👤 Usuário no localStorage:", user);

        if (!user || !user.id) {
          console.error("❌ ERRO: Usuário não encontrado no localStorage");
          throw new Error("Usuário não logado. Faça login novamente.");
        }

        const url = `http://localhost/site-acqualife/Acqualife-web/Api/Buscar_dados.php?id_user=${user.id}`;
        console.log("🔍 Buscando dados para usuário ID:", user.id, "URL:", url);

        const response = await fetch(url);
        const result = await response.json();
        console.log("📦 Resposta da API:", result);

        if (result.success) {
          const newData = result.data;

          // ✅ Só atualiza se realmente mudou (evita piscadas)
          if (JSON.stringify(newData) !== JSON.stringify(previousData.current)) {
            previousData.current = newData;
            setData(newData);
          }
        } else {
          throw new Error(result.message || "Erro na API");
        }
      } catch (err) {
        console.error("❌ Erro no useFetchData:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 2000); // atualiza a cada 2s (mais suave)
    return () => clearInterval(interval);
  }, []);

  return { data, loading, error };
};
