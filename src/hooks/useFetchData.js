// hooks/useFetchData.js - CORRIGIDO
import { useState, useEffect } from 'react';

export const useFetchData = () => {
  const [data, setData] = useState({ volume1: 0, volume2: 0, ph: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const user = JSON.parse(localStorage.getItem("user"));
        console.log('👤 Usuário no localStorage:', user);
        
        // ✅ CORREÇÃO: Usar 'id' em vez de 'id_user'
        if (!user || !user.id) {
          console.error('❌ ERRO: Usuário não encontrado no localStorage');
          throw new Error("Usuário não logado. Faça login novamente.");
        }

        // ✅ CORREÇÃO: Usar user.id em vez de user.id_user
        const url = `http://localhost/site-acqualife/Acqualife-web/Api/Buscar_dados.php?id_user=${user.id}`;
        
        console.log('🔍 Buscando dados para usuário ID:', user.id, 'URL:', url);
        
        const response = await fetch(url);
        const result = await response.json();
        
        console.log('📦 Resposta da API:', result);
        
        if (result.success) {
          setData(result.data);
        } else {
          throw new Error(result.message || "Erro na API");
        }
        
      } catch (err) {
        console.error('❌ Erro no useFetchData:', err);
        setError(err.message);
        
        // Dados padrão em caso de erro
        setData({ volume1: 0, volume2: 0, ph: 0 });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return { data, loading, error };
};