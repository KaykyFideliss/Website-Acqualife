import React from 'react'
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login"); 
  };
  
    return (
    <div className="flex flex-col items-center justify-center  mb-6">
      {/* Botão de Logout */}
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-2 py-3 rounded-lg hover:bg-red-600 transition w-96 text-center font-zalando "
        >
        DESCONECTAR CONTA
      </button>
    </div>
  )
}

export default Logout
