import { useState, useEffect } from 'react';

export const useFetchData = () => {
  const [data, setData] = useState({
    volume1: 0,
    volume2: 0,
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
          'Content-Type': 'text/plain', // ✅ Formato texto
        }
      });
      
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      
      const result = await response.text();
      console.log('✅ Dados recebidos (PHP):', result);
      
      // ✅ FORMATO ESPERADO: "volume1,volume2,ph,timestamp"
      // Exemplo: "6355,0,7.0,2025-10-28 13:37:47"
      const parts = result.split(',');
      
      // ✅ VERIFICAR se temos pelo menos 4 partes
      if (parts.length >= 4) {
        setData({
          volume1: parseFloat(parts[0]) || 0,
          volume2: parseFloat(parts[1]) || 0,
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
      
      // Manter dados anteriores em caso de erro
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    
    // ✅ Atualizar a cada 3 segundos (mais rápido para teste)
    const interval = setInterval(fetchData, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return { data, loading, error, refetch: fetchData };
};