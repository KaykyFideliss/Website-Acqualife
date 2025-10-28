import { useState, useEffect } from "react";

export const useFetchData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost/site-acqualife/Acqualife-web/Api/Buscar_dados.php");
        const text = await res.text(); // 👈 agora pegamos texto
        const [volume1, volume2, ph] = text.split(","); // separa por vírgula

        setData({
          volume1: parseFloat(volume1),
          volume2: parseFloat(volume2),
          ph: parseFloat(ph),
        });
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  return { data, loading };
};
