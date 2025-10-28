import { useState, useEffect } from 'react';

export const useFetchHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHistory = async () => {
    try {
      setLoading(true);
      
      const response = await fetch(`http://localhost/site-acqualife/acqualife-web/Api/Buscar_historico.php?t=${Date.now()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('📊 Histórico recebido:', data.length, 'registros');
      
      setHistory(data);
      setError(null);
    } catch (err) {
      console.error('❌ Erro ao buscar histórico:', err);
      setError(err.message);
      setHistory([]); // ✅ Garantir array vazio em caso de erro
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
    
    // ✅ Atualizar a cada 10 segundos
    const interval = setInterval(fetchHistory, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return { history, loading, error, refetch: fetchHistory };
};