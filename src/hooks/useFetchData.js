// hooks/useFetchData.js
import { useState, useEffect } from 'react';

export const useFetchData = () => {
  const [data, setData] = useState({ volume1: 0, volume2: 0, ph: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        
        // ✅ ACESSO DIRETO ao servidor PHP (já que o proxy não está processando PHP)
        const response = await fetch('http://10.209.126.128/site-acqualife/Acqualife-web/Api/Buscar_dados.php');
        
        console.log('🔍 Response status:', response.status);

        const result = await response.text();
        console.log('📥 Dados recebidos (RAW):', result);
        
        // Formato: volume,volume2,ph,data_atualizacao
        const partes = result.split(',');
        console.log('🔍 Partes divididas:', partes);
        
        if (partes.length >= 3 && partes[0] !== "0") {
          const newData = {
            volume1: parseInt(partes[0]) || 0,
            volume2: parseInt(partes[1]) || 0,
            ph: parseFloat(partes[2]) || 0,
            dataHora: partes[3] || 'Agora'
          };
          
          setData(newData);
          console.log('✅ Dados processados:', newData);
        } else {
          console.log('⚠️ Dados zerados do Arduino');
        }
      } catch (error) {
        console.error('❌ Erro ao buscar dados:', error);
        setError(error.message);
        
        // ✅ Dados mock para desenvolvimento
        setData({
          volume1: 3318,
          volume2: 0,
          ph: 7.0,
          dataHora: 'Dados mock - ' + new Date().toLocaleTimeString()
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return { data, loading, error };
};