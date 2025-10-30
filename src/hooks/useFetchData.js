import { useState, useEffect } from 'react';
export const useFetchData = () => {
  const [data, setData] = useState({
    volume1: 0,
    altura: 0,  // ✅ ADICIONAR CAMPO ALTURA
    ph: 0,
    timestamp: 'Carregando...'
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      const response = await fetch('http://localhost/site-acqualife/acqualife-web/Api/Buscar_dados.php', {
        method: 'GET',
        headers: {
          'Content-Type': 'text/plain',
        }
      });
      
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      
      const result = await response.text();
      console.log('✅ Dados recebidos (PHP):', result);
      
      // ✅ FORMATO: "volume,altura,ph,timestamp"
      const parts = result.split(',');
      
      if (parts.length >= 4) {
        setData({
          volume1: parseFloat(parts[0]) || 0,
          altura: parseFloat(parts[1]) || 0,  // ✅ ALTURA VEM DA SEGUNDA PARTE
          ph: parseFloat(parts[2]) || 0,
          timestamp: parts[3] || new Date().toLocaleString()
        });
      } else {
        throw new Error('Formato de dados inválido');
      }
      
      setError(null);
    } catch (err) {
      console.error('❌ Erro ao buscar dados:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  return { data, loading, error, refetch: fetchData };
};